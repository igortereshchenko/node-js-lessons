/*
class MyClass{

    sum(a,b){
        return a+b;
    }
}

var myclass = new MyClass();

console.log(myclass.sum(1,5));
*/

// class 
const events = require('events');
const http = require('http');

class DataLoadEvent extends events{

    constructor(){
        super();
    }
}

var  data_event = new DataLoadEvent();
//subscribe handler
data_event.on('no data',()=>{

    console.log('No data');
});

data_event.on('load data',()=>{

    console.log('prepare file');
});

data_event.on('load data', ()=>{

    console.log('data loaded');
    console.log('file closed');
});
data_event.on('load data', (file_name)=>{

    console.log(`data loaded from ${file_name}`);
    console.log('file closed');
});


//generate events
data_event.emit('no data');

data_event.emit('load data', 'index.txt');


const server = http.createServer();

server.on('request', (request, response)=>{

    console.log('request received');
    console.log(request.url);

    response.end('request received');
    
});


server.on('request', (request, response)=>{

    console.log('Other request handler');

})

server.on('close', ()=>{
    console.log('server shutting down...');
})

server.listen(8000,'localhost',()=>{
    console.log('server listening...');
})