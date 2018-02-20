/*
exports object strcuture
module.exports={
  defaultres:"sorry , i cant understand your request",
  list:[
    {text:'hi',stext:'hello can i help you?'}
  ]

};
for the *defaultres, is the fall back respond, when the bot dont undertstand the recieve text
for the *list object respond define by user
  for text input 
  {rtext:"hi",stext:"hello can i help you?"} *rtext is the recive text and *stext is the respond text
  
*/
var witres = require('./witreslist');
//var witres = [];
module.exports={
  defaultres:"sorry , i cant understand your request",
  list:[
    {rtext:'hi',stext:'hello can i help you?'},
    {rtext:"can u show me google?",stext:"https://www.google.com"},
    {rtext:"google me",stext:"https://www.google.com"}
  ],
  wit:witres

};