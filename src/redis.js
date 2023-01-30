const commands = {APPEND:"APPEND",append:"APPEND",BITCOUNT:"BITCOUNT",bitCount:"BITCOUNT",BITFIELD_RO:"BITFIELD_RO",bitFieldRo:"BITFIELD_RO",BITFIELD:"BITFIELD",bitField:"BITFIELD",BITOP:"BITOP",bitOp:"BITOP",BITPOS:"BITPOS",bitPos:"BITPOS",BLMOVE:"BLMOVE",blMove:"BLMOVE",BLMPOP:"BLMPOP",blmPop:"BLMPOP",BLPOP:"BLPOP",blPop:"BLPOP",BRPOP:"BRPOP",brPop:"BRPOP",BRPOPLPUSH:"BRPOPLPUSH",brPopLPush:"BRPOPLPUSH",BZMPOP:"BZMPOP",bzmPop:"BZMPOP",BZPOPMAX:"BZPOPMAX",bzPopMax:"BZPOPMAX",BZPOPMIN:"BZPOPMIN",bzPopMin:"BZPOPMIN",COPY:"COPY",copy:"COPY",DECR:"DECR",decr:"DECR",DECRBY:"DECRBY",decrBy:"DECRBY",DEL:"DEL",del:"DEL",DUMP:"DUMP",dump:"DUMP",EVAL_RO:"EVAL_RO",evalRo:"EVAL_RO",EVAL:"EVAL",eval:"EVAL",EVALSHA:"EVALSHA",evalSha:"EVALSHA",EVALSHA_RO:"EVALSHA_RO",evalShaRo:"EVALSHA_RO",EXISTS:"EXISTS",exists:"EXISTS",EXPIRE:"EXPIRE",expire:"EXPIRE",EXPIREAT:"EXPIREAT",expireAt:"EXPIREAT",EXPIRETIME:"EXPIRETIME",expireTime:"EXPIRETIME",FCALL_RO:"FCALL_RO",fCallRo:"FCALL_RO",FCALL:"FCALL",fCall:"FCALL",GEOADD:"GEOADD",geoAdd:"GEOADD",GEODIST:"GEODIST",geoDist:"GEODIST",GEOHASH:"GEOHASH",geoHash:"GEOHASH",GEOPOS:"GEOPOS",geoPos:"GEOPOS",GEORADIUS_RO_WITH:"GEORADIUS_RO_WITH",geoRadiusRoWith:"GEORADIUS_RO_WITH",GEORADIUS_RO:"GEORADIUS_RO",geoRadiusRo:"GEORADIUS_RO",GEORADIUS_WITH:"GEORADIUS_WITH",geoRadiusWith:"GEORADIUS_WITH",GEORADIUS:"GEORADIUS",geoRadius:"GEORADIUS",GEORADIUSBYMEMBER_RO_WITH:"GEORADIUSBYMEMBER_RO_WITH",geoRadiusByMemberRoWith:"GEORADIUSBYMEMBER_RO_WITH",GEORADIUSBYMEMBER_RO:"GEORADIUSBYMEMBER_RO",geoRadiusByMemberRo:"GEORADIUSBYMEMBER_RO",GEORADIUSBYMEMBER_WITH:"GEORADIUSBYMEMBER_WITH",geoRadiusByMemberWith:"GEORADIUSBYMEMBER_WITH",GEORADIUSBYMEMBER:"GEORADIUSBYMEMBER",geoRadiusByMember:"GEORADIUSBYMEMBER",GEORADIUSBYMEMBERSTORE:"GEORADIUSBYMEMBERSTORE",geoRadiusByMemberStore:"GEORADIUSBYMEMBERSTORE",GEORADIUSSTORE:"GEORADIUSSTORE",geoRadiusStore:"GEORADIUSSTORE",GEOSEARCH_WITH:"GEOSEARCH_WITH",geoSearchWith:"GEOSEARCH_WITH",GEOSEARCH:"GEOSEARCH",geoSearch:"GEOSEARCH",GEOSEARCHSTORE:"GEOSEARCHSTORE",geoSearchStore:"GEOSEARCHSTORE",GET:"GET",get:"GET",GETBIT:"GETBIT",getBit:"GETBIT",GETDEL:"GETDEL",getDel:"GETDEL",GETEX:"GETEX",getEx:"GETEX",GETRANGE:"GETRANGE",getRange:"GETRANGE",GETSET:"GETSET",getSet:"GETSET",HDEL:"HDEL",hDel:"HDEL",HEXISTS:"HEXISTS",hExists:"HEXISTS",HGET:"HGET",hGet:"HGET",HGETALL:"HGETALL",hGetAll:"HGETALL",HINCRBY:"HINCRBY",hIncrBy:"HINCRBY",HINCRBYFLOAT:"HINCRBYFLOAT",hIncrByFloat:"HINCRBYFLOAT",HKEYS:"HKEYS",hKeys:"HKEYS",HLEN:"HLEN",hLen:"HLEN",HMGET:"HMGET",hmGet:"HMGET",HRANDFIELD_COUNT_WITHVALUES:"HRANDFIELD_COUNT_WITHVALUES",hRandFieldCountWithValues:"HRANDFIELD_COUNT_WITHVALUES",HRANDFIELD_COUNT:"HRANDFIELD_COUNT",hRandFieldCount:"HRANDFIELD_COUNT",HRANDFIELD:"HRANDFIELD",hRandField:"HRANDFIELD",HSCAN:"HSCAN",hScan:"HSCAN",HSET:"HSET",hSet:"HSET",HSETNX:"HSETNX",hSetNX:"HSETNX",HSTRLEN:"HSTRLEN",hStrLen:"HSTRLEN",HVALS:"HVALS",hVals:"HVALS",INCR:"INCR",incr:"INCR",INCRBY:"INCRBY",incrBy:"INCRBY",INCRBYFLOAT:"INCRBYFLOAT",incrByFloat:"INCRBYFLOAT",LCS_IDX_WITHMATCHLEN:"LCS_IDX_WITHMATCHLEN",lcsIdxWithMatchLen:"LCS_IDX_WITHMATCHLEN",LCS_IDX:"LCS_IDX",lcsIdx:"LCS_IDX",LCS_LEN:"LCS_LEN",lcsLen:"LCS_LEN",LCS:"LCS",lcs:"LCS",LINDEX:"LINDEX",lIndex:"LINDEX",LINSERT:"LINSERT",lInsert:"LINSERT",LLEN:"LLEN",lLen:"LLEN",LMOVE:"LMOVE",lMove:"LMOVE",LMPOP:"LMPOP",lmPop:"LMPOP",LPOP_COUNT:"LPOP_COUNT",lPopCount:"LPOP_COUNT",LPOP:"LPOP",lPop:"LPOP",LPOS_COUNT:"LPOS_COUNT",lPosCount:"LPOS_COUNT",LPOS:"LPOS",lPos:"LPOS",LPUSH:"LPUSH",lPush:"LPUSH",LPUSHX:"LPUSHX",lPushX:"LPUSHX",LRANGE:"LRANGE",lRange:"LRANGE",LREM:"LREM",lRem:"LREM",LSET:"LSET",lSet:"LSET",LTRIM:"LTRIM",lTrim:"LTRIM",MGET:"MGET",mGet:"MGET",MIGRATE:"MIGRATE",migrate:"MIGRATE",MSET:"MSET",mSet:"MSET",MSETNX:"MSETNX",mSetNX:"MSETNX",OBJECT_ENCODING:"OBJECT_ENCODING",objectEncoding:"OBJECT_ENCODING",OBJECT_FREQ:"OBJECT_FREQ",objectFreq:"OBJECT_FREQ",OBJECT_IDLETIME:"OBJECT_IDLETIME",objectIdleTime:"OBJECT_IDLETIME",OBJECT_REFCOUNT:"OBJECT_REFCOUNT",objectRefCount:"OBJECT_REFCOUNT",PERSIST:"PERSIST",persist:"PERSIST",PEXPIRE:"PEXPIRE",pExpire:"PEXPIRE",PEXPIREAT:"PEXPIREAT",pExpireAt:"PEXPIREAT",PEXPIRETIME:"PEXPIRETIME",pExpireTime:"PEXPIRETIME",PFADD:"PFADD",pfAdd:"PFADD",PFCOUNT:"PFCOUNT",pfCount:"PFCOUNT",PFMERGE:"PFMERGE",pfMerge:"PFMERGE",PSETEX:"PSETEX",pSetEx:"PSETEX",PTTL:"PTTL",pTTL:"PTTL",PUBLISH:"PUBLISH",publish:"PUBLISH",RENAME:"RENAME",rename:"RENAME",RENAMENX:"RENAMENX",renameNX:"RENAMENX",RPOP_COUNT:"RPOP_COUNT",rPopCount:"RPOP_COUNT",RPOP:"RPOP",rPop:"RPOP",RPOPLPUSH:"RPOPLPUSH",rPopLPush:"RPOPLPUSH",RPUSH:"RPUSH",rPush:"RPUSH",RPUSHX:"RPUSHX",rPushX:"RPUSHX",SADD:"SADD",sAdd:"SADD",SCARD:"SCARD",sCard:"SCARD",SDIFF:"SDIFF",sDiff:"SDIFF",SDIFFSTORE:"SDIFFSTORE",sDiffStore:"SDIFFSTORE",SINTER:"SINTER",sInter:"SINTER",SINTERCARD:"SINTERCARD",sInterCard:"SINTERCARD",SINTERSTORE:"SINTERSTORE",sInterStore:"SINTERSTORE",SET:"SET",set:"SET",SETBIT:"SETBIT",setBit:"SETBIT",SETEX:"SETEX",setEx:"SETEX",SETNX:"SETNX",setNX:"SETNX",SETRANGE:"SETRANGE",setRange:"SETRANGE",SISMEMBER:"SISMEMBER",sIsMember:"SISMEMBER",SMEMBERS:"SMEMBERS",sMembers:"SMEMBERS",SMISMEMBER:"SMISMEMBER",smIsMember:"SMISMEMBER",SMOVE:"SMOVE",sMove:"SMOVE",SORT_RO:"SORT_RO",sortRo:"SORT_RO",SORT_STORE:"SORT_STORE",sortStore:"SORT_STORE",SORT:"SORT",sort:"SORT",SPOP:"SPOP",sPop:"SPOP",SRANDMEMBER_COUNT:"SRANDMEMBER_COUNT",sRandMemberCount:"SRANDMEMBER_COUNT",SRANDMEMBER:"SRANDMEMBER",sRandMember:"SRANDMEMBER",SREM:"SREM",sRem:"SREM",SSCAN:"SSCAN",sScan:"SSCAN",STRLEN:"STRLEN",strLen:"STRLEN",SUNION:"SUNION",sUnion:"SUNION",SUNIONSTORE:"SUNIONSTORE",sUnionStore:"SUNIONSTORE",TOUCH:"TOUCH",touch:"TOUCH",TTL:"TTL",ttl:"TTL",TYPE:"TYPE",type:"TYPE",UNLINK:"UNLINK",unlink:"UNLINK",WATCH:"WATCH",watch:"WATCH",XACK:"XACK",xAck:"XACK",XADD:"XADD",xAdd:"XADD",XAUTOCLAIM_JUSTID:"XAUTOCLAIM_JUSTID",xAutoClaimJustId:"XAUTOCLAIM_JUSTID",XAUTOCLAIM:"XAUTOCLAIM",xAutoClaim:"XAUTOCLAIM",XCLAIM:"XCLAIM",xClaim:"XCLAIM",XCLAIM_JUSTID:"XCLAIM_JUSTID",xClaimJustId:"XCLAIM_JUSTID",XDEL:"XDEL",xDel:"XDEL",XGROUP_CREATE:"XGROUP_CREATE",xGroupCreate:"XGROUP_CREATE",XGROUP_CREATECONSUMER:"XGROUP_CREATECONSUMER",xGroupCreateConsumer:"XGROUP_CREATECONSUMER",XGROUP_DELCONSUMER:"XGROUP_DELCONSUMER",xGroupDelConsumer:"XGROUP_DELCONSUMER",XGROUP_DESTROY:"XGROUP_DESTROY",xGroupDestroy:"XGROUP_DESTROY",XGROUP_SETID:"XGROUP_SETID",xGroupSetId:"XGROUP_SETID",XINFO_CONSUMERS:"XINFO_CONSUMERS",xInfoConsumers:"XINFO_CONSUMERS",XINFO_GROUPS:"XINFO_GROUPS",xInfoGroups:"XINFO_GROUPS",XINFO_STREAM:"XINFO_STREAM",xInfoStream:"XINFO_STREAM",XLEN:"XLEN",xLen:"XLEN",XPENDING_RANGE:"XPENDING_RANGE",xPendingRange:"XPENDING_RANGE",XPENDING:"XPENDING",xPending:"XPENDING",XRANGE:"XRANGE",xRange:"XRANGE",XREAD:"XREAD",xRead:"XREAD",XREADGROUP:"XREADGROUP",xReadGroup:"XREADGROUP",XREVRANGE:"XREVRANGE",xRevRange:"XREVRANGE",XSETID:"XSETID",xSetId:"XSETID",XTRIM:"XTRIM",xTrim:"XTRIM",ZADD:"ZADD",zAdd:"ZADD",ZCARD:"ZCARD",zCard:"ZCARD",ZCOUNT:"ZCOUNT",zCount:"ZCOUNT",ZDIFF_WITHSCORES:"ZDIFF_WITHSCORES",zDiffWithScores:"ZDIFF_WITHSCORES",ZDIFF:"ZDIFF",zDiff:"ZDIFF",ZDIFFSTORE:"ZDIFFSTORE",zDiffStore:"ZDIFFSTORE",ZINCRBY:"ZINCRBY",zIncrBy:"ZINCRBY",ZINTER_WITHSCORES:"ZINTER_WITHSCORES",zInterWithScores:"ZINTER_WITHSCORES",ZINTER:"ZINTER",zInter:"ZINTER",ZINTERCARD:"ZINTERCARD",zInterCard:"ZINTERCARD",ZINTERSTORE:"ZINTERSTORE",zInterStore:"ZINTERSTORE",ZLEXCOUNT:"ZLEXCOUNT",zLexCount:"ZLEXCOUNT",ZMPOP:"ZMPOP",zmPop:"ZMPOP",ZMSCORE:"ZMSCORE",zmScore:"ZMSCORE",ZPOPMAX_COUNT:"ZPOPMAX_COUNT",zPopMaxCount:"ZPOPMAX_COUNT",ZPOPMAX:"ZPOPMAX",zPopMax:"ZPOPMAX",ZPOPMIN_COUNT:"ZPOPMIN_COUNT",zPopMinCount:"ZPOPMIN_COUNT",ZPOPMIN:"ZPOPMIN",zPopMin:"ZPOPMIN",ZRANDMEMBER_COUNT_WITHSCORES:"ZRANDMEMBER_COUNT_WITHSCORES",zRandMemberCountWithScores:"ZRANDMEMBER_COUNT_WITHSCORES",ZRANDMEMBER_COUNT:"ZRANDMEMBER_COUNT",zRandMemberCount:"ZRANDMEMBER_COUNT",ZRANDMEMBER:"ZRANDMEMBER",zRandMember:"ZRANDMEMBER",ZRANGE_WITHSCORES:"ZRANGE_WITHSCORES",zRangeWithScores:"ZRANGE_WITHSCORES",ZRANGE:"ZRANGE",zRange:"ZRANGE",ZRANGEBYLEX:"ZRANGEBYLEX",zRangeByLex:"ZRANGEBYLEX",ZRANGEBYSCORE_WITHSCORES:"ZRANGEBYSCORE_WITHSCORES",zRangeByScoreWithScores:"ZRANGEBYSCORE_WITHSCORES",ZRANGEBYSCORE:"ZRANGEBYSCORE",zRangeByScore:"ZRANGEBYSCORE",ZRANGESTORE:"ZRANGESTORE",zRangeStore:"ZRANGESTORE",ZRANK:"ZRANK",zRank:"ZRANK",ZREM:"ZREM",zRem:"ZREM",ZREMRANGEBYLEX:"ZREMRANGEBYLEX",zRemRangeByLex:"ZREMRANGEBYLEX",ZREMRANGEBYRANK:"ZREMRANGEBYRANK",zRemRangeByRank:"ZREMRANGEBYRANK",ZREMRANGEBYSCORE:"ZREMRANGEBYSCORE",zRemRangeByScore:"ZREMRANGEBYSCORE",ZREVRANK:"ZREVRANK",zRevRank:"ZREVRANK",ZSCAN:"ZSCAN",zScan:"ZSCAN",ZSCORE:"ZSCORE",zScore:"ZSCORE",ZUNION_WITHSCORES:"ZUNION_WITHSCORES",zUnionWithScores:"ZUNION_WITHSCORES",ZUNION:"ZUNION",zUnion:"ZUNION",ZUNIONSTORE:"ZUNIONSTORE",zUnionStore:"ZUNIONSTORE",}
const {EventEmitter} = require('events');
const Redis = require("redis");

class RedisInstaller extends  EventEmitter{

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
     * @param debug 是否debug模式
     */
    constructor(configs, target, debug = false) {
        super();
        this.configs = configs;
        this.target = target?target:this;
        this.debug = debug;
        this.initial=false;
        if (!this.target.__REDIS_CACHE) {
            this.target.__REDIS_CACHE = {};
        }
        if (!this.target.REDIS) {
            this.target.REDIS = {};
        }
        this.bindFunctions();
        this.emit('create')
    }

    async load() {
        this.emit('initial')
        await this.install();
    }

    log(...data) {
        if (this.debug) {
            console.log(`🐰😁[REDIS]`, `${this.dateTime()}`, ...data)
        }
    }

    dateTime() {
        const date = new Date();
        // let f ='hh:mm:ss';
        let f = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        return f;
    }

    /*
    //stirng
    'set', // 设置存储在给定键中的值 OK set('key', 'value')
    'get', // 获取存储在给定键中的值 value/null get('key')
    'del', // 删除存储在给定键中的值(任意类型) 1/0 del('key')
    'incrby', // 将键存储的值加上整数increment incrby('key', increment)
    'decrby', // 将键存储的值减去整数increment decrby('key', increment)
    'incrbyfloat', // 将键存储的值加上浮点数increment incrbyfloat('key', increment)
    'append', // 将值value追加到给定键当前存储值的末尾 append('key', 'new-value')
    'getrange', // 获取指定键的index范围内的所有字符组成的子串 getrange('key', 'start-index', 'end-index')
    'setrange', // 将指定键值从指定偏移量开始的子串设为指定值 setrange('key', 'offset', 'new-string')

    //list
    'llen',
    'lpush',
    'rpush',//将给定值推入列表的右端 当前列表长度 rpush('key', 'value1' [,'value2']) (支持数组赋值)
    'lrem',
    'rrem',
    'lrange',//获取列表在给定范围上的所有值 array lrange('key', 0, -1) (返回所有值)
    'lpop',//从列表左端弹出一个值，并返回被弹出的值 lpop('key')
    'rpop',
    'ltrim',//将列表按指定的index范围裁减 ltrim('key', 'start', 'end')
    'lindex',//获取列表在给定位置上的单个元素 lindex('key', 1)

    //set
    'sadd', //将给定元素添加到集合 插入元素数量 sadd('key', 'value1'[, 'value2', ...]) (不支持数组赋值)(元素不允许重复)
    'smembers', // 返回集合中包含的所有元素 array(无序) smembers('key')
    'sismenber', // 检查给定的元素是否存在于集合中 1/0 sismenber('key', 'value')
    'srem', // 如果给定的元素在集合中，则移除此元素 1/0 srem('key', 'value')
    'scad', // 返回集合包含的元素的数量 sacd('key')
    'spop', // 随机地移除集合中的一个元素，并返回此元素 spop('key')
    'smove', // 集合元素的迁移 smove('source-key'dest-key', 'item')
    'sdiff', // 返回那些存在于第一个集合，但不存在于其他集合的元素(差集) sdiff('key1', 'key2'[, 'key3', ...])
    'sdiffstore', // 将sdiff操作的结果存储到指定的键中 sdiffstore('dest-key', 'key1', 'key2' [,'key3...])
    'sinter', // 返回那些同事存在于所有集合中的元素(交集) sinter('key1', 'key2'[, 'key3', ...])
    'sinterstore', // 将sinter操作的结果存储到指定的键中 sinterstore('dest-key', 'key1', 'key2' [,'key3...])
    'sunion', // 返回那些至少存在于一个集合中的元素(并集) sunion('key1', 'key2'[, 'key3', ...])
    'sunionstore', // 将sunion操作的结果存储到指定的键中 sunionstore('dest-key', 'key1', 'key2' [,'key3...])

    //hash
    'hset', // 在散列里面关联起给定的键值对 1(新增)/0(更新) hset('hash-key', 'sub-key', 'value') (不支持数组、字符串)
    'hget', // 获取指定散列键的值 hget('hash-key', 'sub-key')
    'hgetall', // 获取散列包含的键值对 json hgetall('hash-key')
    'hdel', // 如果给定键存在于散列里面，则移除这个键 hdel('hash-key', 'sub-key')
    'hmset', // 为散列里面的一个或多个键设置值 OK hmset('hash-key', obj)
    'hmget', // 从散列里面获取一个或多个键的值 array hmget('hash-key', array)
    'hlen', // 返回散列包含的键值对数量 hlen('hash-key')
    'hexists', // 检查给定键是否在散列中 1/0 hexists('hash-key', 'sub-key')
    'hkeys', // 获取散列包含的所有键 array hkeys('hash-key')
    'hvals', // 获取散列包含的所有值 array hvals('hash-key')
    'hincrby', // 将存储的键值以指定增量增加 返回增长后的值 hincrby('hash-key', 'sub-key', increment) (注：假如当前value不为为字符串，则会无输出，程序停止在此处)
    'hincrbyfloat', // 将存储的键值以指定浮点数增加

    //zset
    'zadd', //将一个带有给定分支的成员添加到有序集合中 zadd('zset-key', score, 'key') (score为int)
    'zrange', //根据元素在有序排列中的位置，从中取出元素
    'zrangebyscore', //获取有序集合在给定分值范围内的所有元素
    'zrem', //如果给定成员存在于有序集合，则移除
    'zcard', //获取一个有序集合中的成员数量 有序集的元素个数 zcard('key')

    //keys命令组
    'del', // 删除一个(或多个)keys 被删除的keys的数量 del('key1'[, 'key2', ...])
    'exists', // 查询一个key是否存在 1/0 exists('key')
    'expire', // 设置一个key的过期的秒数 1/0 expire('key', seconds)
    'pexpire', // 设置一个key的过期的毫秒数 1/0 pexpire('key', milliseconds)
    'expireat', // 设置一个UNIX时间戳的过期时间 1/0 expireat('key', timestamp)
    'pexpireat', // 设置一个UNIX时间戳的过期时间(毫秒) 1/0 pexpireat('key', milliseconds-timestamp)
    'persist', // 移除key的过期时间 1/0 persist('key')
    'sort', // 对队列、集合、有序集合排序 排序完成的队列等 sort('key'[, pattern, limit offset count])
    'flushdb', // 清空当前数据库
     */
    bindFunctions() {
        let _this = this;
        for (const name in commands) {
            let commandValue = commands[name];
            this[name] = (...args) => {
                _this.log(`Call [${name}]`,' | ',...args);
                return new Promise(async (resolve, reject) => {
                    if (!_this.initial){
                        reject(new Error('Please call load() first !!'))
                    }
                    try {
                        let client = await _this.getClient();
                        let result = await client[commandValue](...args);
                        resolve(result);
                    } catch (error) {
                        reject(error);
                    }
                })

            }
            _this.target.REDIS[name] = async (...args) => {
                return this[name](...args);
            }
            _this.target.REDIS[`${name}Async`] = async (...args) => {
                return this[name](...args);
            }

        }
    }

    async install() {
        await this.createClient(this.configs);
        this.initial=true;
        this.emit('ready')
    }

    randomInt(maxNum) {
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

    addClient(key, client) {
        this.target.__REDIS_CACHE[key] = client;
    }

    removeClient(key) {
        delete this.target.__REDIS_CACHE[key];
    }

    async createClient(redisConfig) {
        let _this = this;
        return new Promise(async (resolve, reject) => {
            const id = _this.randomStr();
            let client;
            let url = '';
            if (redisConfig.url) {
                url = redisConfig.url;
            } else {
                url = `redis://${redisConfig.host}:${redisConfig.port}`;
            }
            let option = {
                url
            };
            const configKeys = [
                'name', 'username', 'password', 'database',
                'commandsQueueMaxLength', 'disableOfflineQueue',
                'readonly', 'legacyMode', 'pingInterval'
            ];
            for (const key in configKeys) {
                if (redisConfig[key] != null) {
                    option[key] = redisConfig[key];
                }
            }
            //connect ready reconnecting drain end error data ping-interval
            client = Redis.createClient(option);
            client.on('connect', () => {
                _this.log(`client[ ${id} ]: connect`);
            });
            client.on('ready', () => {
                _this.log(`client[ ${id} ]: ready`);
                _this.addClient(id, client);
                resolve(client);
            });

            client.on('reconnecting', () => {
                _this.log(`client[ ${id} ]: reconnecting`);
            });
            client.on('drain', () => {
                _this.log(`client[ ${id} ]: drain`);
            });

            client.on('data', (data) => {
                _this.log(`client[ ${id} ]: data`, data);
            });
            client.on('ping-interval', (reply) => {
                _this.log(`client[ ${id} ]: ping-interval`, reply);
            });


            client.on('end', () => {
                _this.log(`client[ ${id} ]: close`);
                client.quit();
                _this.removeClient(id);
            });

            client.on('error', (error) => {
                _this.log(`client[ ${id} ]: error`, error);
                client.quit();
                _this.removeClient(id);
            });
            await client.connect();


        });
    }

    async getClient() {
        const keys = Object.keys(this.target.__REDIS_CACHE);
        let client;
        if (keys.length > 0) {
            const index = this.randomInt(keys.length - 1);
            const key = keys[index];
            client = this.target.__REDIS_CACHE[key];
        }
        if (!client) {
            client = await this.createClient(this.configs);
        }
        return client;
    }

}
// export default RedisInstaller;
module.exports = RedisInstaller;
