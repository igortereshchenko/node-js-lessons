const fs = require('fs');
const http = require('http');

const server = http.createServer();


server.on('request',(request,response)=>{

    //solution classic
    fs.readFile('/day-2/node-async/output.txt','utf-8',(error, data)=>{

        if (!error)
            response.end(data);
    });


    //

});


server.listen(8000,'localhost', ()=>{
    console.log('server started');
});