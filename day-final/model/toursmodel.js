const mongoose = require('mongoose');
const tourRouter = require('../routes/tour_router');

const tourSchema =new mongoose.Schema(

{    
    
    name : {
            type:String,
            trim:true,
            unique:true,
            required: [true, 'Tour name is required']
          },

    duration:{
              type:Number,
              required:true  

            } , 
            
    price:{
            type:Number
            },
            
    author:{type:String}        

}
);


tourSchema.virtual('durationWeeks').get(function(){

    return this.duration/7;

});


tourSchema.virtual('selectdate').get(function(){

    return Date.now();

});



module.exports = mongoose.model('Tour', tourSchema);