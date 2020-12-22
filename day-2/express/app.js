const express = require('express')

const app = express();


app.get('/', (request, response)=>{

    response.status(200).send('hello');
});

app.get('/v1/api/:id/:name', (request, response)=>{

    response.status(200).send(`hello ${request.params.name}`);
});


app.post('/post' ,(request, response)=>{

    console.log(request.params);
    response.send('Ok');
})

app.listen(3000,()=>{

    console.log('Server starting...');

});