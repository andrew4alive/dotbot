var fbresponselist = require('./fbresponselist');

var respond = require('./respondhandler');

var confidence=0.7;

module.exports=function(psid,msg,ob,resolve,reject,handletext){
      var wr=fbresponselist.wit;
      var entities = wr.entities;
      //console.log( ob.entities);   
      var hcA = highconfidenceAll(ob.entities);
     // console.log(hcA);
  var match=witmatch(wr,hcA);
  //   console.log( witmatch(wr,hcA));
  if(match!=null){
    match.wit=true;
     respond(psid,match);
     resolve(false);
     return false;
  }
    handletext(psid,msg,resolve,reject);
}


function witmatch(wr,hcA){
    var result=null;
        for(var i=0;i<wr.length;i++){
          var arr = wr[i].entities;
          var ky1 = Object.keys(hcA);
          var count=0;
          var hcAkyc=Object.keys(hcA).length;
          for(var ky in arr){
            if(ky1.indexOf(ky)!=-1){
              if(arr[ky].value==hcA[ky].value){
                if( hcA[ky].confidence>confidence){
                   count=count+1;
                }
              }
            }
          }/// one object loop
        //  console.log(count,Object.keys(arr).length);
       //   console.log(result,count);
          if(hcAkyc == 0) {
            return null;
          }
          if(count == hcAkyc){ 
            return wr[i];
          }
          else if(count == Object.keys(arr).length){
              if(result==null){
                result=wr[i];
                result.count=count;
                continue;
              }
              var ky=Object.keys(result);
            if(ky.indexOf('count')&&result.count<count){
                result=wr[i];
                result.count=count;
                continue;
            }
          
          }
          
      }// full loop
    if(result!=null)
      delete result.count;
      return result;
}


function highconfidenceAll(entities){
   // console.log(entities);
  var re ={};
   for (var ky in entities){
        // console.log(ky);
        re[ky] =  highconfidence(entities[ky]) ;
   }
  return re;
}

function highconfidence(entity){
  var he={};
    entity.forEach(function(ob){
      var ky=Object.keys(he);
      if(ky.indexOf('confidence')==-1){
        he=ob;
        return;
      }
      if(ob.confidence>he.confidence){
        he=ob;
      }
    });
  return he;
}