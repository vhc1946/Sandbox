//Libraries used in project
const path = require('path'),
      fs = require('fs'),
      http = require('http');
var {exec} = require('child_process');

var port = 4000; //port for local host

var server = http.createServer();

server.on('request',(req,res)=>{
  console.log('Request from mart');
  let logitem = {

  }
  res.send('Response from mart')
});

server.listen(port);
