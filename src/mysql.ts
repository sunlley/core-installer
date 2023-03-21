import BaseInstaller from './installer';
import {createPool} from 'mysql2';
// import {PoolConnection} from "mysql2/index";

class Installer extends BaseInstaller {
    private configs: any;

    /**
     *
     * @param configs
     * @param target mysql绑定对象
     * @param multiple {boolean} 是否是多个
     * @param debug 是否debug模式 default=false;
     */
    constructor(configs: any, target: any, multiple = false, debug = false) {
        super('MYSQL', target, multiple, debug);
        this.configs = configs;
        if (!this.target.__SQL_CACHE) {
            this.target.__SQL_CACHE = {};
        }
        if (!this.target.SQL) {
            this.target.SQL = {}
        }
    }

    async install() {
        this.logInfo('install');
        if (this.multiple) {
            for (const key in this.configs) {
                await this.createClient(this.configs[key], key);
            }
        } else {
            await this.createClient(this.configs);
        }
    }

    addClient(key: string, client: any) {
        this.target.__SQL_CACHE[key] = client;
    }

    removeClient(key: string) {
        delete this.target.__SQL_CACHE[key];
    }

    querySql(connect: any, sql: any, params: any) {
        return new Promise((resolve, reject) => {
            connect.query(sql, params, (error:any) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(true)
                }
            })
        })
    }


    createClient(options: any, name?: string | null) {
        const _this = this;
        return new Promise(async (resolve, reject) => {
            const id = _this.randomStr();
            const config = options;
            if (!name) {
                name = null;
                _this.logInfo(`createClient[ default ]: option`, config);
            } else {
                name = name.toUpperCase();
                _this.logInfo(`createClient[ ${name} ]: option`, config);

            }

            // 使用连接池，提升性能
            const pool = await createPool(config);
            const temp_rds = (transactions = false) => {
                if (_this.target.__SQL_CACHE.RDS) {
                    return _this.target.__SQL_CACHE.RDS;
                }
                const RDSClient = require('ali-rds');
                _this.target.__SQL_CACHE.RDS = new RDSClient(options);
                return _this.target.__SQL_CACHE.RDS;
            }
            const temp_sql_trans = (sqlArr: any) => {
                _this.logInfo('exc SQL', 'Transaction', sqlArr);
                return new Promise((resolve1, reject1) => {
                    pool.getConnection((error, connection) => {
                        if (error) {
                            _this.logError('SQL', 'Transaction', 'Error', error);
                            if (connection) {
                                connection.release();
                            }
                            reject1(error);
                        } else if (!connection) {
                            _this.logError('SQL', 'Transaction', 'Error', "No SQL's connect found");
                            reject1(new Error("No SQL's connect found"));
                        } else {
                            connection.beginTransaction(async (errorBegin) => {
                                if (errorBegin) {
                                    _this.logError('SQL', 'Transaction', 'Error', errorBegin);
                                    connection.release();
                                    reject1(errorBegin);
                                } else {
                                    try {
                                        for (let sql of sqlArr) {
                                            // @ts-ignore
                                            await this.querySql(connection, sql.sql, sql.params);
                                        }
                                        connection.commit((errorCommit)=>{
                                            if (errorCommit){
                                                connection.rollback((errorRollback)=>{
                                                    connection.release();
                                                });
                                                reject1(errorCommit);
                                            }else{
                                                resolve1(true);
                                            }
                                        });
                                    } catch (error) {
                                        _this.logError('SQL', 'Transaction', 'Error', error);
                                        // await poolConnection.rollback();
                                        connection.rollback((errorRollback)=>{
                                            connection.release();
                                        });
                                        reject1(error);
                                    }
                                }
                            });
                        }

                    })
                    // pool.getConnection(async (err:any, conn:PoolConnection) => {
                    //     if (err) {
                    //         _this.logError('SQL','Transaction','Error', err);
                    //         if (conn) {
                    //             conn.release();
                    //         }
                    //         reject1(err);
                    //     }else if (!conn){
                    //         _this.logError('SQL','Transaction','Error', "No SQL's connect found");
                    //         reject1(new Error("No SQL's connect found"));
                    //     } else {
                    //         conn.beginTransaction(async (error:any)=>{
                    //             if (error){
                    //                 _this.logError('SQL','Transaction','Error', error);
                    //                 conn.release();
                    //                 reject1(error);
                    //             }else{
                    //                 try {
                    //                     for (let sql of sqlArr) {
                    //                         await this.querySql(conn, sql.sql, sql.params);
                    //                     }
                    //                     conn.commit();
                    //                 } catch (e) {
                    //                     _this.logError('SQL','Transaction','Error', error);
                    //                     // await poolConnection.rollback();
                    //                     conn.rollback();
                    //                     conn.release();
                    //                     reject1(error);
                    //                 }
                    //                 // let result = await this.querySql()
                    //
                    //             }
                    //         });
                    //         // const poolConnection = conn.promise();
                    //         // try {
                    //         //     await poolConnection.beginTransaction();
                    //         //     for (let sql of sqlArr) {
                    //         //         await poolConnection.query(sql.sql, sql.params);
                    //         //     }
                    //         //     await poolConnection.commit();
                    //         //     conn.release();
                    //         //     resolve1(true);
                    //         // } catch (error) {
                    //         //     _this.logError('SQL','Transaction','Error', error);
                    //         //     await poolConnection.rollback();
                    //         //     conn.release();
                    //         //     reject1(error);
                    //         // }
                    //
                    //     }
                    // });
                });
            }
            const temp_sql = (sql: any, params: any, transactions = false) => {
                if (transactions) {
                    return temp_sql_trans(sql);
                }
                _this.logInfo('exc SQL', sql, params);
                return new Promise((resolve1, reject1) => {
                    pool.getConnection(async (err, conn: any) => {
                        if (err) {
                            _this.logError('SQL', err);
                            if (conn) {
                                conn.release();
                            }
                            reject1(err);
                        } else if (!conn) {
                            _this.logError('SQL', "No SQL's connect found");
                            reject1(new Error("No SQL's connect found"));
                        } else {
                            let poolConnection = conn.promise();
                            try {
                                let [result] = await poolConnection.query(sql, params ? params : []);
                                conn.release();
                                resolve1(result);
                            } catch (err) {
                                _this.logError('SQL', err);
                                conn.release();
                                reject1(err);
                            }
                        }
                    });
                });
            }
            if (name) {
                _this.target.SQL[name] = temp_sql;
                _this.target.SQL[name + 'RDS'] = temp_rds;
            } else {
                _this.target.SQL = temp_sql;
                _this.target.SQLRDS = temp_rds;
            }


            pool.on('acquire', (connection: any) => {
                _this.logSys(`client[ ${id} ]: acquire`);
            })
            pool.on('connection', (connection: any) => {
                _this.logSys(`client[ ${id} ]: connection`);
            })
            pool.on('enqueue', () => {
                _this.logSys(`client[ ${id} ]: enqueue`);
            })
            pool.on('release', (connection: any) => {
                _this.logSys(`client[ ${id} ]: release`);
            })
            resolve(pool);
        })
    }

}

export default Installer;
