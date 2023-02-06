const {RedisInstaller}=require('../dist');
const TARGET={};
const CONFIG_REDIS={
    REDIS1:{
        host:'127.0.0.1',
        port:6379
    },
    REDIS2:{
        host:'127.0.0.1',
        port:6379
    }
}
const delay = (time = 1000) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(true)
        }, time)
    })
}
function installRedis() {
    if (CONFIG_REDIS) {
        new RedisInstaller(CONFIG_REDIS, TARGET,true,true).load();
    }
}

const test = async () => {
    console.log('Start');
    installRedis();
    await delay(2000);
    await TARGET.REDIS.REDIS1.SET('REDIS1:VERSE','123123123');
    let testResult = await TARGET.REDIS.REDIS1.GET('REDIS1:VERSE');
    console.log('testResult',testResult);
    await TARGET.REDIS.REDIS2.SET('REDIS2:VERSE','ABC123123123');
    let chainsResult = await TARGET.REDIS.REDIS2.GET('REDIS2:VERSE');
    console.log('chainsResult',chainsResult);
    console.log('Done');

}
test()