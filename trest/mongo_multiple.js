// const {MongoInstaller}=require('../dist');
const fs = require('fs');
const TARGET={};
var ca = [fs.readFileSync("./rds-combined-ca-bundle.pem")];

const CONFIG={
    uri:'mongodb://root@Mr0s8#dFdf#8s386di2ds:18.141.178.177:9505/?authSource=test',
    // url:'52.77.221.75:9502/?replicaSet=rs0&readPreference=secondaryPreferred&retryWrites=false',
    // username:'root',
    // password:'Mr0s8#dFdf#8s386di2ds',
    options:{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        ssl: true,
        sslValidate: true,
        sslCA: ca
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
    // if (CONFIG) {
    //     await new MongoInstaller(CONFIG, TARGET,false,true).load();
    // }
    var MongoClient = require('mongodb').MongoClient;
    var client = MongoClient.connect(
        'mongodb://root@Mr0s8#dFdf#8s386di2ds:18.141.178.177:9505/test?ssl=true&&replicaSet=rs0&readPreference=secondaryPreferred',
        CONFIG.options,

        function(err, client) {
            if(err){
                console.log(err);
                throw err;
            }
            //Specify the database to be used
            db = client.db('test');

            //Specify the collection to be used
            col = db.collection('block_eth');
            col.findById('63dbb166adffa01e66bd52e8', function(err, result){
                //Find the document that was previously written
                col.findOne({'hello':'Amazon DocumentDB'}, function(err, result){
                    //Print the result to the screen
                    console.log(result);

                    //Close the connection
                    client.close()
                });
            });
        });
}

const test = async () => {
    console.log('Start');
    await install();
    await delay(2000);

}
test()