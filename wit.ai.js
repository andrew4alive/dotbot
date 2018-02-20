var request = require('request');

var w= {};


w.getres=function(msg){

    return new Promise(function(resolve,reject){
      
      withttp(msg).then(function(ob){
       
        resolve(JSON.parse(ob));
      }).catch(function(e){
         
      reject(e)
      
      });

    });
  

};



function withttp(msg){
return new Promise(function(resolve,reject){
   try{
     var bearer =  process.env.bearer_wit;
   }
  catch(e){
    reject(e);
    return null;
  }
  request({
  "uri":'https://api.wit.ai/message?v=14/02/2018&q='+msg,
  "method":"get",
     'auth': {
    'bearer': bearer
  }
  },
   function(err,res,body){
    // console.log('hi');
    // console.log(err,body);
     if(err) reject(err);
    // console.log(body);
     resolve(body);
   } 
  );
});


                   
}
module.exports=w;