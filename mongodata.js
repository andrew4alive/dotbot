const client = require('mongodb').MongoClient;

var mongod = {}
var url = process.env.mongourl;

mongod.insert=function(collection,data,cb){
  client.connect(url,function(err,c){
    if(err) throw "cannot connnect"+url;
    var db = c.db('cutebot');
     db.collection(collection).insertOne(data,function(err,res){
     if(err) throw 'err';
      console.log('save to massage');
     });
  });
}

module.exports=mongod;