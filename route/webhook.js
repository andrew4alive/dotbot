var express = require('express');
var router = express.Router();
var msghandle= require('../msghandle.js');

// Accepts POST requests at /webhook endpoint
router.post('/webhook', (req, res) => {  
  //console.log('is call');
  // Parse the request body from the POST
  let body = req.body;
  //console.log(body);
  var url=process.env.fbmsgurl;
  // Check the webhook event is from a Page subscription
  if (body.object === 'page') {
    
    msghandle.init(body,res);
    
    

  } else {
    // Return a '404 Not Found' if event is not from a page subscription
    res.sendStatus(404);
  }

});

// Accepts GET requests at the /webhook endpoint
router.get('/webhook', (req, res) => {
  
  /** UPDATE YOUR VERIFY TOKEN **/
  const VERIFY_TOKEN = process.env.VERIFY_TOKEN;
  
  // Parse params from the webhook verification request
  let mode = req.query['hub.mode'];
  let token = req.query['hub.verify_token'];
  let challenge = req.query['hub.challenge'];
    
  // Check if a token and mode were sent
  if (mode && token) {
  
    // Check the mode and token sent are correct
    if (mode === 'subscribe' && token === VERIFY_TOKEN) {
      
      // Respond with 200 OK and challenge token from the request
      console.log('WEBHOOK_VERIFIED');
      res.status(200).send(challenge);
    
    } else {
      // Responds with '403 Forbidden' if verify tokens do not match
      res.sendStatus(403);      
    }
  }
});


module.exports= router;