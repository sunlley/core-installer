import BaseInstaller, { Cluster } from './installer';
import {AbortController} from "node-abort-controller";
import axios from 'axios';

class Installer extends BaseInstaller {
    private configs:any;
    private baseParams:any;
    /**
     * 取消标识
     * @private
     */
    private signals:any={};
    constructor(configs:any, target?:any, multiple = false, debug=false) {
        super('HTTP',target,multiple,debug);
        this.configs = configs;
        this.baseParams = configs.baseParams;
        delete this.configs.baseParams;
        if (!this.target.HTTP) {
            this.target.HTTP = {}
        }
    }

    async install() {
        this.logInfo('install')
        if (this.multiple) {
            const keys = Object.keys(this.configs);
            for (const key of keys) {
                const config = this.configs[key];
                await this.createClient(config, key);
            }
        } else {
            await this.createClient(this.configs);
        }
        this.initial = true;
        this.emit('ready')

    }

    _matchParams(params:any){
        if (!this.baseParams){
            return params?params:{};
        }
        if (!params){
            params=JSON.parse(JSON.stringify(this.baseParams))
        }else{
            params=Object.assign(JSON.parse(JSON.stringify(this.baseParams)),params);
        }
        return params;
    }

    createClient(options:any, name?:string|null) {
        const _this = this;
        return new Promise(async (resolve, reject) => {
            const id = _this.randomStr();
            const config = {
                baseURL: options.host,
                timeout: options.timeout?options.timeout:10000,
                headers: options.headers ? options.headers : {'Content-Type': 'application/json'}
            };
            if (!name) {
                name = null;
                _this.logInfo(`create client [default]`,config);
            } else {
                name = name.toUpperCase();
                _this.logInfo(`create client [${name}]`,config);
            }

            const client = axios.create(config);
            const post = (path:string, params?:any) => {
                params = _this._matchParams(params);
                return new Promise((resolve1, reject1) => {
                    if (typeof path !== 'string' || path === '') {
                        reject1(new Error(`No path found or path's type is not string`));
                    }
                    const _cancel_key = params._cancel_key;
                    delete params._cancel_key;
                    const option:any={};
                    if (_cancel_key){
                        const controller = new AbortController()
                        option.signal = controller.signal;
                        _this.signals[_cancel_key]=controller;
                    }

                    client.post(path, params)
                        .then((result) => {
                            resolve1(result.data);
                        })
                        .catch((error) => {
                            _this.logError('post','path',error)
                            reject1(error);
                        });

                });
            }
            const get = (path:string, params?:any) => {
                params = _this._matchParams(params);
                return new Promise((resolve1, reject1) => {
                    if (typeof path !== 'string' || path === '') {
                        reject1(new Error(`No path found or path's type is not string`));
                    }
                    const query:any = [];
                    for (const paramsKey in params) {
                        query.push(`${paramsKey}=${params[paramsKey]}`);
                    }
                    if (path.indexOf('?') >= 0) {
                        if (path.indexOf('&') >= 0) {
                            path = `${path}&${query.join('&')}`
                        } else {
                            path = `${path}${query.join('&')}`
                        }
                    } else {
                        path = `${path}?${query.join('&')}`
                    }
                    const _cancel_key = params._cancel_key;
                    delete params._cancel_key;
                    const option:any={};
                    if (_cancel_key){
                        const controller = new AbortController()
                        option.signal = controller.signal;
                        _this.signals[_cancel_key]=controller;
                    }
                    client.get(path,option)
                        .then((result) => {
                            resolve1(result.data);
                        })
                        .catch((error) => {
                            _this.logError('get','path',error)

                            reject1(error);
                        })
                });
            }

            const cancel = (_cancel_key:string) => {
                if (_this.signals[_cancel_key]){
                    _this.logInfo('cancel',_cancel_key);
                    _this.signals[_cancel_key].abort()
                }else{
                    _this.logInfo('cancel',`Cannot found signals:${_cancel_key}`);
                }
            }
            const getClient=()=>{
                return client;
            }
            if (name) {
                _this.target.HTTP[name] = {
                    cancel, post, get,client:getClient
                };
            } else {
                _this.target.HTTP = {
                    cancel, post, get,client:getClient
                };
            }
            resolve(true);
        })
    }
}
export default Installer;
