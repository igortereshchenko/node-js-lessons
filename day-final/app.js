//MVC
const express = require('express');
const morgan = require('morgan');

const app = express();



//middleware
app.set('view engine', 'pug');
app.set('views','./views')


app.use(morgan('dev'));
app.use(express.json());
app.use( (request, response, next)=>{
    
    console.log('Middleware 2');

    next();
})

app.use( (request, response, next)=>{
  
    console.log('Middleware 1');
    next();
})


//routes
const tourRouter = require('./routes/tour_router');
app.use('/api/v1/tours', tourRouter);



app.get('/', (request, response)=>{
    response.status(200).render('index',
    {
        myvariable:'Parameter hello'    
    })
})


app.get('/form',(request, response)=>{

    response.sendFile(`${__dirname}/views/tour_jq.html`);
});

//server
module.exports=app;





