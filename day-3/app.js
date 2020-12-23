//MVC
const express = require('express');
const morgan = require('morgan');

const app = express();

//middleware

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



//server
module.exports=app;





