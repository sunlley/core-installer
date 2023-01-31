import BaseInstaller from './installer';
import {createPool} from 'mysql2';

class Installer extends  BaseInstaller{
    private configs:any;

    /**
     *
     * @param configs
     * @param target mysql绑定对象
     * @param multiple {boolean} 是否是多个
     * @param debug 是否debug模式
     */
    constructor(configs:any, target:any,multiple=false,debug=false) {
        super('MYSQL',target,multiple,debug);
        this.configs = configs;
        if (!this.target.__SQL_CACHE) {
            this.target.__SQL_CACHE = {};
        }
        if (!this.target.SQL){
            this.target.SQL={}
        }
    }

    async install() {
        if (this.multiple){
            for (const key in this.configs) {
                await this.createClient(this.configs[key], key);
            }
        }else{
            await this.createClient(this.configs);
        }
    }

    addClient(key:string, client:any) {
        this.target.__SQL_CACHE[key] = client;
    }

    removeClient(key:string) {
        delete this.target.__SQL_CACHE[key];
    }

    createClient(options:any, name?:string|null) {
        const _this = this;
        return new Promise(async (resolve, reject)=>{
            if (!name) {
                name = null;
            } else {
                name = name.toUpperCase();
            }
            const id = _this.randomStr();

            const config = options;
            _this.log('createClient',name);
            // 使用连接池，提升性能
            const pool = await createPool(config);
            const temp_rds = (transactions = false) => {
                if (_this.target.__SQL_CACHE.RDS) {
                    return _this.target.__SQL_CACHE.RDS;
                }
                const RDSClient = require('ali-rds');
                _this.target.__SQL_CACHE.RDS = new RDSClient (options);
                return _this.target.__SQL_CACHE.RDS;
            }
            const temp_sql_trans = (sqlArr:any) => {
                _this.log('temp_sql_trans',sqlArr);
                return new Promise((resolve1,reject1) => {
                    pool.getConnection(async (err:any, conn:any) => {
                        if (err) {
                            _this.log('SQL','Transaction','Error', err);
                            if (conn) {
                                conn.release();
                            }
                            reject1(err);
                        }else if (!conn){
                            _this.log('SQL','Transaction','Error', "No SQL's connect found");
                            reject1(new Error("No SQL's connect found"));
                        } else {
                            const poolConnection = conn.promise();
                            try {
                                await poolConnection.beginTransaction();
                                for (let sql of sqlArr) {
                                    await poolConnection.query(sql.sql, sql.params);
                                }
                                await poolConnection.commit();
                                conn.release();
                                resolve1(true);
                            } catch (error) {
                                await poolConnection.rollback();
                                reject1(error);
                            }

                        }
                    });
                });
            }
            const temp_sql = (sql:any, params:any,transactions = false) => {
                if (transactions){
                    return temp_sql_trans(sql);
                }
                _this.log('exc SQL',sql, params);
                return new Promise((resolve1,reject1) => {
                    pool.getConnection(async (err, conn:any) => {
                        if (err) {
                            _this.log('SQL', err);
                            if (conn) {
                                conn.release();
                            }
                            reject1(err);
                        }else if (!conn){
                            reject1(new Error("No SQL's connect found"));
                        } else {
                            let poolConnection = conn.promise();
                            try {
                                let [result] = await poolConnection.query(sql, params ? params : []);
                                conn.release();
                                resolve1(result);
                            } catch (err) {
                                _this.log('SQL', err);
                                conn.release();
                                reject1(err);
                            }
                        }
                    });
                });
            }
            if (name){
                _this.target.SQL[name]=temp_sql;
                _this.target.SQL[name+'RDS']=temp_rds;
            }else{
                _this.target.SQL=temp_sql;
                _this.target.SQLRDS=temp_rds;
            }

            
            pool.on('acquire',(connection:any)=>{
                _this.log(`client[ ${id} ]: acquire`);
            })
            pool.on('connection',(connection:any)=>{
                _this.log(`client[ ${id} ]: connection`);
            })
            pool.on('enqueue',()=>{
                _this.log(`client[ ${id} ]: enqueue`);
            })
            pool.on('release',(connection:any)=>{
                _this.log(`client[ ${id} ]: release`);
            })
            resolve(pool);
        })
    }

}
export default Installer;