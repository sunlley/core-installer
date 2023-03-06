import BaseInstaller from './installer';
import {createClient} from 'redis';

const commands: any = {
    APPEND: "APPEND",
    append: "APPEND",
    BITCOUNT: "BITCOUNT",
    bitCount: "BITCOUNT",
    BITFIELD_RO: "BITFIELD_RO",
    bitFieldRo: "BITFIELD_RO",
    BITFIELD: "BITFIELD",
    bitField: "BITFIELD",
    BITOP: "BITOP",
    bitOp: "BITOP",
    BITPOS: "BITPOS",
    bitPos: "BITPOS",
    BLMOVE: "BLMOVE",
    blMove: "BLMOVE",
    BLMPOP: "BLMPOP",
    blmPop: "BLMPOP",
    BLPOP: "BLPOP",
    blPop: "BLPOP",
    BRPOP: "BRPOP",
    brPop: "BRPOP",
    BRPOPLPUSH: "BRPOPLPUSH",
    brPopLPush: "BRPOPLPUSH",
    BZMPOP: "BZMPOP",
    bzmPop: "BZMPOP",
    BZPOPMAX: "BZPOPMAX",
    bzPopMax: "BZPOPMAX",
    BZPOPMIN: "BZPOPMIN",
    bzPopMin: "BZPOPMIN",
    COPY: "COPY",
    copy: "COPY",
    DECR: "DECR",
    decr: "DECR",
    DECRBY: "DECRBY",
    decrBy: "DECRBY",
    DEL: "DEL",
    del: "DEL",
    DUMP: "DUMP",
    dump: "DUMP",
    EVAL_RO: "EVAL_RO",
    evalRo: "EVAL_RO",
    EVAL: "EVAL",
    eval: "EVAL",
    EVALSHA: "EVALSHA",
    evalSha: "EVALSHA",
    EVALSHA_RO: "EVALSHA_RO",
    evalShaRo: "EVALSHA_RO",
    EXISTS: "EXISTS",
    exists: "EXISTS",
    EXPIRE: "EXPIRE",
    expire: "EXPIRE",
    EXPIREAT: "EXPIREAT",
    expireAt: "EXPIREAT",
    EXPIRETIME: "EXPIRETIME",
    expireTime: "EXPIRETIME",
    FCALL_RO: "FCALL_RO",
    fCallRo: "FCALL_RO",
    FCALL: "FCALL",
    fCall: "FCALL",
    GEOADD: "GEOADD",
    geoAdd: "GEOADD",
    GEODIST: "GEODIST",
    geoDist: "GEODIST",
    GEOHASH: "GEOHASH",
    geoHash: "GEOHASH",
    GEOPOS: "GEOPOS",
    geoPos: "GEOPOS",
    GEORADIUS_RO_WITH: "GEORADIUS_RO_WITH",
    geoRadiusRoWith: "GEORADIUS_RO_WITH",
    GEORADIUS_RO: "GEORADIUS_RO",
    geoRadiusRo: "GEORADIUS_RO",
    GEORADIUS_WITH: "GEORADIUS_WITH",
    geoRadiusWith: "GEORADIUS_WITH",
    GEORADIUS: "GEORADIUS",
    geoRadius: "GEORADIUS",
    GEORADIUSBYMEMBER_RO_WITH: "GEORADIUSBYMEMBER_RO_WITH",
    geoRadiusByMemberRoWith: "GEORADIUSBYMEMBER_RO_WITH",
    GEORADIUSBYMEMBER_RO: "GEORADIUSBYMEMBER_RO",
    geoRadiusByMemberRo: "GEORADIUSBYMEMBER_RO",
    GEORADIUSBYMEMBER_WITH: "GEORADIUSBYMEMBER_WITH",
    geoRadiusByMemberWith: "GEORADIUSBYMEMBER_WITH",
    GEORADIUSBYMEMBER: "GEORADIUSBYMEMBER",
    geoRadiusByMember: "GEORADIUSBYMEMBER",
    GEORADIUSBYMEMBERSTORE: "GEORADIUSBYMEMBERSTORE",
    geoRadiusByMemberStore: "GEORADIUSBYMEMBERSTORE",
    GEORADIUSSTORE: "GEORADIUSSTORE",
    geoRadiusStore: "GEORADIUSSTORE",
    GEOSEARCH_WITH: "GEOSEARCH_WITH",
    geoSearchWith: "GEOSEARCH_WITH",
    GEOSEARCH: "GEOSEARCH",
    geoSearch: "GEOSEARCH",
    GEOSEARCHSTORE: "GEOSEARCHSTORE",
    geoSearchStore: "GEOSEARCHSTORE",
    GET: "GET",
    get: "GET",
    GETBIT: "GETBIT",
    getBit: "GETBIT",
    GETDEL: "GETDEL",
    getDel: "GETDEL",
    GETEX: "GETEX",
    getEx: "GETEX",
    GETRANGE: "GETRANGE",
    getRange: "GETRANGE",
    GETSET: "GETSET",
    getSet: "GETSET",
    HDEL: "HDEL",
    hDel: "HDEL",
    HEXISTS: "HEXISTS",
    hExists: "HEXISTS",
    HGET: "HGET",
    hGet: "HGET",
    HGETALL: "HGETALL",
    hGetAll: "HGETALL",
    HINCRBY: "HINCRBY",
    hIncrBy: "HINCRBY",
    HINCRBYFLOAT: "HINCRBYFLOAT",
    hIncrByFloat: "HINCRBYFLOAT",
    HKEYS: "HKEYS",
    hKeys: "HKEYS",
    HLEN: "HLEN",
    hLen: "HLEN",
    HMGET: "HMGET",
    hmGet: "HMGET",
    HRANDFIELD_COUNT_WITHVALUES: "HRANDFIELD_COUNT_WITHVALUES",
    hRandFieldCountWithValues: "HRANDFIELD_COUNT_WITHVALUES",
    HRANDFIELD_COUNT: "HRANDFIELD_COUNT",
    hRandFieldCount: "HRANDFIELD_COUNT",
    HRANDFIELD: "HRANDFIELD",
    hRandField: "HRANDFIELD",
    HSCAN: "HSCAN",
    hScan: "HSCAN",
    HSET: "HSET",
    hSet: "HSET",
    HSETNX: "HSETNX",
    hSetNX: "HSETNX",
    HSTRLEN: "HSTRLEN",
    hStrLen: "HSTRLEN",
    HVALS: "HVALS",
    hVals: "HVALS",
    INCR: "INCR",
    incr: "INCR",
    INCRBY: "INCRBY",
    incrBy: "INCRBY",
    INCRBYFLOAT: "INCRBYFLOAT",
    incrByFloat: "INCRBYFLOAT",
    LCS_IDX_WITHMATCHLEN: "LCS_IDX_WITHMATCHLEN",
    lcsIdxWithMatchLen: "LCS_IDX_WITHMATCHLEN",
    LCS_IDX: "LCS_IDX",
    lcsIdx: "LCS_IDX",
    LCS_LEN: "LCS_LEN",
    lcsLen: "LCS_LEN",
    LCS: "LCS",
    lcs: "LCS",
    LINDEX: "LINDEX",
    lIndex: "LINDEX",
    LINSERT: "LINSERT",
    lInsert: "LINSERT",
    LLEN: "LLEN",
    lLen: "LLEN",
    LMOVE: "LMOVE",
    lMove: "LMOVE",
    LMPOP: "LMPOP",
    lmPop: "LMPOP",
    LPOP_COUNT: "LPOP_COUNT",
    lPopCount: "LPOP_COUNT",
    LPOP: "LPOP",
    lPop: "LPOP",
    LPOS_COUNT: "LPOS_COUNT",
    lPosCount: "LPOS_COUNT",
    LPOS: "LPOS",
    lPos: "LPOS",
    LPUSH: "LPUSH",
    lPush: "LPUSH",
    LPUSHX: "LPUSHX",
    lPushX: "LPUSHX",
    LRANGE: "LRANGE",
    lRange: "LRANGE",
    LREM: "LREM",
    lRem: "LREM",
    LSET: "LSET",
    lSet: "LSET",
    LTRIM: "LTRIM",
    lTrim: "LTRIM",
    MGET: "MGET",
    mGet: "MGET",
    MIGRATE: "MIGRATE",
    migrate: "MIGRATE",
    MSET: "MSET",
    mSet: "MSET",
    MSETNX: "MSETNX",
    mSetNX: "MSETNX",
    OBJECT_ENCODING: "OBJECT_ENCODING",
    objectEncoding: "OBJECT_ENCODING",
    OBJECT_FREQ: "OBJECT_FREQ",
    objectFreq: "OBJECT_FREQ",
    OBJECT_IDLETIME: "OBJECT_IDLETIME",
    objectIdleTime: "OBJECT_IDLETIME",
    OBJECT_REFCOUNT: "OBJECT_REFCOUNT",
    objectRefCount: "OBJECT_REFCOUNT",
    PERSIST: "PERSIST",
    persist: "PERSIST",
    PEXPIRE: "PEXPIRE",
    pExpire: "PEXPIRE",
    PEXPIREAT: "PEXPIREAT",
    pExpireAt: "PEXPIREAT",
    PEXPIRETIME: "PEXPIRETIME",
    pExpireTime: "PEXPIRETIME",
    PFADD: "PFADD",
    pfAdd: "PFADD",
    PFCOUNT: "PFCOUNT",
    pfCount: "PFCOUNT",
    PFMERGE: "PFMERGE",
    pfMerge: "PFMERGE",
    PSETEX: "PSETEX",
    pSetEx: "PSETEX",
    PTTL: "PTTL",
    pTTL: "PTTL",
    PUBLISH: "PUBLISH",
    publish: "PUBLISH",
    RENAME: "RENAME",
    rename: "RENAME",
    RENAMENX: "RENAMENX",
    renameNX: "RENAMENX",
    RPOP_COUNT: "RPOP_COUNT",
    rPopCount: "RPOP_COUNT",
    RPOP: "RPOP",
    rPop: "RPOP",
    RPOPLPUSH: "RPOPLPUSH",
    rPopLPush: "RPOPLPUSH",
    RPUSH: "RPUSH",
    rPush: "RPUSH",
    RPUSHX: "RPUSHX",
    rPushX: "RPUSHX",
    SADD: "SADD",
    sAdd: "SADD",
    SCARD: "SCARD",
    sCard: "SCARD",
    SDIFF: "SDIFF",
    sDiff: "SDIFF",
    SDIFFSTORE: "SDIFFSTORE",
    sDiffStore: "SDIFFSTORE",
    SINTER: "SINTER",
    sInter: "SINTER",
    SINTERCARD: "SINTERCARD",
    sInterCard: "SINTERCARD",
    SINTERSTORE: "SINTERSTORE",
    sInterStore: "SINTERSTORE",
    SET: "SET",
    set: "SET",
    SETBIT: "SETBIT",
    setBit: "SETBIT",
    SETEX: "SETEX",
    setEx: "SETEX",
    SETNX: "SETNX",
    setNX: "SETNX",
    SETRANGE: "SETRANGE",
    setRange: "SETRANGE",
    SISMEMBER: "SISMEMBER",
    sIsMember: "SISMEMBER",
    SMEMBERS: "SMEMBERS",
    sMembers: "SMEMBERS",
    SMISMEMBER: "SMISMEMBER",
    smIsMember: "SMISMEMBER",
    SMOVE: "SMOVE",
    sMove: "SMOVE",
    SORT_RO: "SORT_RO",
    sortRo: "SORT_RO",
    SORT_STORE: "SORT_STORE",
    sortStore: "SORT_STORE",
    SORT: "SORT",
    sort: "SORT",
    SPOP: "SPOP",
    sPop: "SPOP",
    SRANDMEMBER_COUNT: "SRANDMEMBER_COUNT",
    sRandMemberCount: "SRANDMEMBER_COUNT",
    SRANDMEMBER: "SRANDMEMBER",
    sRandMember: "SRANDMEMBER",
    SREM: "SREM",
    sRem: "SREM",
    SSCAN: "SSCAN",
    sScan: "SSCAN",
    STRLEN: "STRLEN",
    strLen: "STRLEN",
    SUNION: "SUNION",
    sUnion: "SUNION",
    SUNIONSTORE: "SUNIONSTORE",
    sUnionStore: "SUNIONSTORE",
    TOUCH: "TOUCH",
    touch: "TOUCH",
    TTL: "TTL",
    ttl: "TTL",
    TYPE: "TYPE",
    type: "TYPE",
    UNLINK: "UNLINK",
    unlink: "UNLINK",
    WATCH: "WATCH",
    watch: "WATCH",
    XACK: "XACK",
    xAck: "XACK",
    XADD: "XADD",
    xAdd: "XADD",
    XAUTOCLAIM_JUSTID: "XAUTOCLAIM_JUSTID",
    xAutoClaimJustId: "XAUTOCLAIM_JUSTID",
    XAUTOCLAIM: "XAUTOCLAIM",
    xAutoClaim: "XAUTOCLAIM",
    XCLAIM: "XCLAIM",
    xClaim: "XCLAIM",
    XCLAIM_JUSTID: "XCLAIM_JUSTID",
    xClaimJustId: "XCLAIM_JUSTID",
    XDEL: "XDEL",
    xDel: "XDEL",
    XGROUP_CREATE: "XGROUP_CREATE",
    xGroupCreate: "XGROUP_CREATE",
    XGROUP_CREATECONSUMER: "XGROUP_CREATECONSUMER",
    xGroupCreateConsumer: "XGROUP_CREATECONSUMER",
    XGROUP_DELCONSUMER: "XGROUP_DELCONSUMER",
    xGroupDelConsumer: "XGROUP_DELCONSUMER",
    XGROUP_DESTROY: "XGROUP_DESTROY",
    xGroupDestroy: "XGROUP_DESTROY",
    XGROUP_SETID: "XGROUP_SETID",
    xGroupSetId: "XGROUP_SETID",
    XINFO_CONSUMERS: "XINFO_CONSUMERS",
    xInfoConsumers: "XINFO_CONSUMERS",
    XINFO_GROUPS: "XINFO_GROUPS",
    xInfoGroups: "XINFO_GROUPS",
    XINFO_STREAM: "XINFO_STREAM",
    xInfoStream: "XINFO_STREAM",
    XLEN: "XLEN",
    xLen: "XLEN",
    XPENDING_RANGE: "XPENDING_RANGE",
    xPendingRange: "XPENDING_RANGE",
    XPENDING: "XPENDING",
    xPending: "XPENDING",
    XRANGE: "XRANGE",
    xRange: "XRANGE",
    XREAD: "XREAD",
    xRead: "XREAD",
    XREADGROUP: "XREADGROUP",
    xReadGroup: "XREADGROUP",
    XREVRANGE: "XREVRANGE",
    xRevRange: "XREVRANGE",
    XSETID: "XSETID",
    xSetId: "XSETID",
    XTRIM: "XTRIM",
    xTrim: "XTRIM",
    ZADD: "ZADD",
    zAdd: "ZADD",
    ZCARD: "ZCARD",
    zCard: "ZCARD",
    ZCOUNT: "ZCOUNT",
    zCount: "ZCOUNT",
    ZDIFF_WITHSCORES: "ZDIFF_WITHSCORES",
    zDiffWithScores: "ZDIFF_WITHSCORES",
    ZDIFF: "ZDIFF",
    zDiff: "ZDIFF",
    ZDIFFSTORE: "ZDIFFSTORE",
    zDiffStore: "ZDIFFSTORE",
    ZINCRBY: "ZINCRBY",
    zIncrBy: "ZINCRBY",
    ZINTER_WITHSCORES: "ZINTER_WITHSCORES",
    zInterWithScores: "ZINTER_WITHSCORES",
    ZINTER: "ZINTER",
    zInter: "ZINTER",
    ZINTERCARD: "ZINTERCARD",
    zInterCard: "ZINTERCARD",
    ZINTERSTORE: "ZINTERSTORE",
    zInterStore: "ZINTERSTORE",
    ZLEXCOUNT: "ZLEXCOUNT",
    zLexCount: "ZLEXCOUNT",
    ZMPOP: "ZMPOP",
    zmPop: "ZMPOP",
    ZMSCORE: "ZMSCORE",
    zmScore: "ZMSCORE",
    ZPOPMAX_COUNT: "ZPOPMAX_COUNT",
    zPopMaxCount: "ZPOPMAX_COUNT",
    ZPOPMAX: "ZPOPMAX",
    zPopMax: "ZPOPMAX",
    ZPOPMIN_COUNT: "ZPOPMIN_COUNT",
    zPopMinCount: "ZPOPMIN_COUNT",
    ZPOPMIN: "ZPOPMIN",
    zPopMin: "ZPOPMIN",
    ZRANDMEMBER_COUNT_WITHSCORES: "ZRANDMEMBER_COUNT_WITHSCORES",
    zRandMemberCountWithScores: "ZRANDMEMBER_COUNT_WITHSCORES",
    ZRANDMEMBER_COUNT: "ZRANDMEMBER_COUNT",
    zRandMemberCount: "ZRANDMEMBER_COUNT",
    ZRANDMEMBER: "ZRANDMEMBER",
    zRandMember: "ZRANDMEMBER",
    ZRANGE_WITHSCORES: "ZRANGE_WITHSCORES",
    zRangeWithScores: "ZRANGE_WITHSCORES",
    ZRANGE: "ZRANGE",
    zRange: "ZRANGE",
    ZRANGEBYLEX: "ZRANGEBYLEX",
    zRangeByLex: "ZRANGEBYLEX",
    ZRANGEBYSCORE_WITHSCORES: "ZRANGEBYSCORE_WITHSCORES",
    zRangeByScoreWithScores: "ZRANGEBYSCORE_WITHSCORES",
    ZRANGEBYSCORE: "ZRANGEBYSCORE",
    zRangeByScore: "ZRANGEBYSCORE",
    ZRANGESTORE: "ZRANGESTORE",
    zRangeStore: "ZRANGESTORE",
    ZRANK: "ZRANK",
    zRank: "ZRANK",
    ZREM: "ZREM",
    zRem: "ZREM",
    ZREMRANGEBYLEX: "ZREMRANGEBYLEX",
    zRemRangeByLex: "ZREMRANGEBYLEX",
    ZREMRANGEBYRANK: "ZREMRANGEBYRANK",
    zRemRangeByRank: "ZREMRANGEBYRANK",
    ZREMRANGEBYSCORE: "ZREMRANGEBYSCORE",
    zRemRangeByScore: "ZREMRANGEBYSCORE",
    ZREVRANK: "ZREVRANK",
    zRevRank: "ZREVRANK",
    ZSCAN: "ZSCAN",
    zScan: "ZSCAN",
    ZSCORE: "ZSCORE",
    zScore: "ZSCORE",
    ZUNION_WITHSCORES: "ZUNION_WITHSCORES",
    zUnionWithScores: "ZUNION_WITHSCORES",
    ZUNION: "ZUNION",
    zUnion: "ZUNION",
    ZUNIONSTORE: "ZUNIONSTORE",
    zUnionStore: "ZUNIONSTORE"
}

class Installer extends BaseInstaller {
    private configs: any;
    private __REDIS_CACHE: any;

    /**
     *
     * @param configs {Object:{
     *     host?: string;
     *     port?: number;
     *     url?: string;
     *     name?: string;
     *     username?: string;
     *     password?: string;
     *     database?: number;
     *     commandsQueueMaxLength?: number;
     *     disableOfflineQueue?: boolean;
     *     readonly?: boolean;
     *     legacyMode?: boolean;
     *     pingInterval?: number;
     *     onRetryStrategy?:Function
     * }}
     * @param target redis绑定对象
     * @param multiple 是否多配置模式
     * @param debug {boolean|string} 是否debug模式
     */
    constructor(configs: any, target: any, multiple = false, debug = false) {
        super('REDIS', target, multiple, debug);
        this.configs = configs;
        if (!this.__REDIS_CACHE) {
            this.__REDIS_CACHE = {};
        }
        if (!this.target.REDIS) {
            this.target.REDIS = {};
        }
    }

    bindCommands() {
        let keys = Object.keys(this.__REDIS_CACHE);
        if (keys.length === 1) {
            let client = this.__REDIS_CACHE[keys[0]];
            this.bindClient(client, null);
        } else if (keys.length > 1) {
            for (const key of keys) {
                let client = this.__REDIS_CACHE[key];
                this.bindClient(client, key);
            }
        }
    }

    bindClient(client: any, name: any) {
        let _this = this;
        if (!client) {
            _this.logError('bindClient', 'No Client Found')
            return;
        }
        for (const command in commands) {
            let commandValue = commands[command];
            const method = (...args: any) => {
                if (name) {
                    _this.logInfo(`Call [${name}][${command}]`, ' | ', ...args);
                } else {
                    _this.logInfo(`Call [${command}]`, ' | ', ...args);
                }
                return new Promise(async (resolve, reject) => {
                    if (!_this.initial) {
                        if (name) {
                            _this.logError(`Call [${name}][${command}]`, ' | ', 'Please call load() first !!');
                        } else {
                            _this.logError(`Call [${command}]`, ' | ', 'Please call load() first !!');
                        }
                        reject(new Error('Please call load() first !!'))
                    }
                    try {
                        let result = await client[commandValue](...args);
                        resolve(result);
                    } catch (error) {
                        if (name) {
                            _this.logError(`Call [${name}][${command}]`, ' | ', error);
                        } else {
                            _this.logError(`Call [${command}]`, ' | ', error);
                        }
                        reject(error);
                    }
                })

            }
            if (name) {
                if (!_this.target.REDIS[name]) {
                    _this.target.REDIS[name] = {};
                }
                _this.target.REDIS[name][command] = method;
            } else {
                _this.target.REDIS[command] = method;
            }
        }
        if (_this.multiple) {
            _this.logInfo('bindClient', Object.keys(_this.target.REDIS));
        } else {
            if (_this.target.REDIS) {
                _this.logInfo('bindClient', 'default')
            }
        }
    }

    async install() {
        this.logInfo('install')
        if (this.multiple) {
            for (const key in this.configs) {
                await this.createClient(this.configs[key], key);
            }
        } else {
            await this.createClient(this.configs, null);
        }
        this.bindCommands();
    }

    addClient(key: string, client: any) {
        if (!key) {
            key = 'default';
        }
        key = key.toUpperCase();
        this.__REDIS_CACHE[key] = client;
    }

    removeClient(key: string) {
        if (!key) {
            key = 'default';
        }
        key = key.toUpperCase();
        delete this.__REDIS_CACHE[key];
    }

    async createClient(redisConfig: any, name: any) {
        let _this = this;
        return new Promise(async (resolve, reject) => {
            const id = _this.randomStr();
            _this.logInfo(`client[ ${id} ]: config`, `name:${name}`, redisConfig);
            let url = '';
            if (redisConfig.url) {
                url = redisConfig.url;
            } else {
                url = `redis://${redisConfig.host}:${redisConfig.port}`;
            }
            let option: any = {
                url
            };
            const configKeys = [
                'name', 'username', 'password', 'database', 'socket',
                'commandsQueueMaxLength', 'disableOfflineQueue',
                'readonly', 'legacyMode', 'pingInterval'
            ];
            for (const key of configKeys) {
                if (redisConfig[key] != null) {
                    option[key] = redisConfig[key];
                }
            }
            _this.logInfo(`client[ ${id} ]: option`, `name:${name}`, option);
            if (!option.pingInterval) {
                option.pingInterval = 1000;
            }
            // connect ready reconnecting drain end error data ping-interval
            const client = createClient(option);
            client.on('connect', () => {
                _this.logSys(`client[ ${id} ]: connect`);
            });
            client.on('ready', () => {
                _this.logSys(`client[ ${id} ]: ready`);
                resolve(client);
            });
            client.on('reconnecting', () => {
                _this.logSys(`client[ ${id} ]: reconnecting`);
            });
            client.on('drain', () => {
                _this.logSys(`client[ ${id} ]: drain`);
            });
            client.on('data', (data: any) => {
                _this.logSys(`client[ ${id} ]: data`, data);
            });
            client.on('ping-interval', (reply: any) => {
                _this.logSys(`client[ ${id} ]: ping-interval`, reply);
            });
            client.on('end', () => {
                _this.logSys(`client[ ${id} ]: close`);
                client.quit();
                _this.removeClient(id);
            });
            client.on('error', (error: any) => {
                _this.logSys(`client[ ${id} ] | [${url}]: error`, error);
                client.quit();
                _this.removeClient(id);
            });
            _this.addClient(name, client);
            await client.connect();
        });
    }
}

export default Installer;
