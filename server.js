/**
 * Copyright 2017-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *
 * Starter Project for Messenger Platform Quick Start Tutorial
 *
 * Use this project as the starting point for following the 
 * Messenger Platform quick start tutorial.
 *
 * https://developers.facebook.com/docs/messenger-platform/getting-started/quick-start/
 *
 */

'use strict';

// Imports dependencies and set up http server
const 
  request = require('request'),
  express = require('express'),
  body_parser = require('body-parser'),
  app = express().use(body_parser.json()); // creates express http server

var webhookroute = require('./route/webhook');
//var msghandle= require('./msghandle.js');
// Sets server port and logs message on success
app.listen(process.env.PORT || 80, () => console.log('webhook is listening'));
app.use(express.static('public'));
app.get("/",function(req,res){
    res.sendFile(__dirname+'/views/index.html');
});


app.use('/',webhookroute);
