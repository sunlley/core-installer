const {MysqlInstaller}=require('../dist');
const TARGET={};
const CONFIG={
    UDATA: {
        host: "127.0.0.1",
        // host: "192.168.3.40",
        port: 3306,
        user: 'root',
        password: 'root123456',
        database: 'udata',
        pool: true,
        connectionLimit: 2
    }
}
const delay = (time = 1000) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(true)
        }, time)
    })
}
async function install() {
    if (CONFIG) {
        await new MysqlInstaller(CONFIG, TARGET,true,'error').load();
    }
}

const test = async () => {
    console.log('Start');
    await install();
    await delay(2000);
    let begins=[
        {
            sql:'insert into users (username1,password) values(?,?)',
            params:['小明','123123']
        }, {
            sql:'insert into users (username,password) values(?,?)',
            params:['小明222','123123567567']
        }
    ]
    let result = await TARGET.SQL.UDATA(begins,[],true)
    console.log(result);
}
test()
