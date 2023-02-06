# CORE-Installer
简化Redis、Mysql、Mongodb的使用过程

![](https://img.shields.io/badge/version-1.1.7-lightgrey)
![](https://img.shields.io/badge/node-15.%2B-brightgreen)

## 安装
Using npm:
```shell
$ npm install core-installer
```

## 1使用 Redis
### 1.1 Redis初始化
```javascript
const {RedisInstaller} = require('core-installer');
const TARGET={};
//1、单一实例配置
let config={
    // url:'redis://127.0.0.1:6379',
    host:'127.0.0.1',
    port:6379
}
const installer = new RedisInstaller(config,TARGET,false,true);
await installer.load();
//2、多实例配置
let config={
    APP1:{
        // url:'redis://127.0.0.1:6379',
        host:'127.0.0.1',
        port:6379
    },
    APP2:{
        host:'127.0.0.1',
        port:6379
    },
}
const installer = new RedisInstaller(config,TARGET,true,true);
await installer.load();

```
### 1.2 Redis使用
```javascript
//1、单一模式下的使用
await TARGET.REDIS.SET('TEST:KEY','abc');
let result = await TARGET.REDIS.GET('TEST:KEY');
console.log(result);

//2、多实例模式下的使用
await TARGET.REDIS.APP1.SET('TEST:KEY:APP1','app1');
let result1 = await TARGET.REDIS.APP1.GET('TEST:KEY:APP1');
console.log(result1);

await TARGET.REDIS.APP2.SET('TEST:KEY:APP2','app2');
let result2 = await TARGET.REDIS.APP2.GET('TEST:KEY:APP2');
console.log(result2);

```

--------

## 2使用 Mysql
### 2.1 Mysql初始化
```javascript
const {MysqlInstaller} = require('core-installer');
const TARGET={};
//1、单一实例配置
let config={
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "root12345",
    database: "test"
}
const installer = new MysqlInstaller(config,TARGET,false,true);
await installer.load();
//2、多实例配置
let config={
    APP1:{
        host: "127.0.0.1",
        port: 3306,
        user: "root",
        password: "root12345",
        database: "test"
    },
    APP2:{
        host: "127.0.0.1",
        port: 3306,
        user: "root",
        password: "root12345",
        database: "test"
    },
}
const installer = new MysqlInstaller(config,TARGET,true,true);
await installer.load();

```
### 2.2 Mysql使用
```javascript
//1、单一模式下的使用
let result = await TARGET.SQL('select * from test',[]);
console.log(result);
//2、多实例模式下的使用
let result1 = await TARGET.SQL.APP1('select * from test',[]);
console.log(result1);
let result2 = await TARGET.SQL.APP2('select * from test',[]);
console.log(result2);

```
