//server parameters
const server = require('./app')
const dotenv = require('dotenv')
const mongoose = require('mongoose')


dotenv.config( {path :'./config.env'} )

//load config


mongoose.connect(process.env.DATABASE, {useCreateIndex : true })
.then( ()=>{
    console.log('Connection done');
})


server.listen(process.env.PORT,()=>{
    console.log('Application Tours started...');
})