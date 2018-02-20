const request = require('request')


var reply = {};

reply.withtext=function(url,psid,text){
 
  var request_body = {
    "recipient": {
      "id": psid
    },
    "message": {"text":text}
  };
  postres(url,request_body);
    
}

reply.typing=function(url,psid){
 
  var request_body = {
    "recipient": {
      "id": psid
    },
    "sender_action":"typing_on"
  };
  postres(url,request_body);
  
}



//helper 
function postres(url,json){
    request({
    "uri": url,
    "method": "POST",
    "json": json
  }, (err, res, body) => {
    if (!err) {
      //console.log('message sent!')
    } else {
      console.error("Unable to send message:" + err);
    }
  });
}

module.exports = reply;





