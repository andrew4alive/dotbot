/*sample respond
module.exports=[

  { "entities":
                { 
                    'greetings':{value:'true'} 
                } 
          ,
       stext:'hello, what can ai can help u with? '
  }
  
];
*/

module.exports=[

  { "entities":
                { 
                    'greetings':{value:'true'} 
                } 
          ,
       stext:'hello, what can ai can help u with? '
  },
   { "entities":
                { 
                    'greetings':{value:'true'} ,intent:{value:'order:coffee'}
                } 
          ,
       stext:'hello, what kind of coffee you want?{{order:coffee}} '
  },
     { "entities":
                { 
                    intent:{value:'order:coffee'}
                } 
          ,
       stext:'you {{{{}}intent{{}}}} is {{intent}}'+'\n'+'what kind of coffee you want? '
  }
  
  
];