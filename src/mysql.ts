import {EventEmitter} from "events";
import {createPool} from 'mysql2';

class MysqlInstaller extends  EventEmitter{
    private configs:any;
    private target:any;
    private multiple:boolean;
    private debug:boolean;
    private initial:boolean=false;

    /**
     *
     * @param configs
     * @param target mysql绑定对象
     * @param multiple {boolean} 是否是多个
     * @param debug 是否debug模式
     */
    constructor(configs:any, target:any,multiple=false,debug=false) {
        super();
        this.configs = configs;
        this.target = target != null ? target : this;
        this.multiple = multiple;
        this.debug = debug;
        if (!this.target.__SQL_CACHE) {
            this.target.__SQL_CACHE = {};
        }
        if (!this.target.SQL){
            this.target.SQL={}
        }
    }

    async load() {
        this.emit('initial')
        await this.install();
    }

    log(...data:any) {
        if (this.debug) {
            // @ts-ignore
            console.log(`🐰😁[MYSQL]`, `${this.dateTime()}`, ...data)
        }
    }

    dateTime() {
        const date = new Date();
        // let f ='hh:mm:ss';
        return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    }

    async install() {
        if (this.multiple){
            for (const key in this.configs) {
                await this.createClient(this.configs[key], key);
            }
        }else{
            await this.createClient(this.configs);
        }
        this.initial=true;
        this.emit('ready')

    }

    randomInt(maxNum:number) {
        if (maxNum <= 0) {
            return 0;
        }
        const minNum = 0;
        try {
            return parseInt(`${Math.random() * (maxNum - minNum + 1) + minNum}`, 10);
        } catch (e) {
        }
        return 0;
    }

    randomStr(length = 10) {
        let e = '';
        for (let n = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890', o = 0;
             o < length; o++) {
            e += n.charAt(Math.floor(Math.random() * n.length));
        }
        return e;
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
export default MysqlInstaller;