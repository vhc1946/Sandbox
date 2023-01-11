
const path = require('path'),
      fs = require('fs'),
      http = require('http'),
      url = require('url');
var {exec} = require('child_process');

var port = 5050; //default port

var server = http.createServer();

server.on('request',(req,res)=>{
  console.log('JAPI');
  let data = '';
  req.on('data',chunk=>{data+=chunk;console.log('CHUNK',chunk)});
  req.on('end',()=>{
    console.log('Data ',data);
    try{data=JSON.parse(data);}catch{data={};}
    let jpak={ //prep vapi response pack object
      msg:'Recieved Request',
      success:true,
      body:{},
      data:data
    }
    if(Object.keys(data).length>0){ //does the data have any

    }else{

    }
    res.write('PING');
    res.end();
  });
})

server.listen(port);
