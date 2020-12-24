const { count } = require("../model/toursmodel");

const Tour = require('./../model/toursmodel')





exports.get_all_tours= async (request, response)=>{

    try{

        const tours =await Tour.find();


        response.status(200).json(
            {
                status:"success",
                results:tours.length,
                data: { tours}
            }
        );
    }catch(error){
        response.status(404).json({
            status:'fail',
            message:error
        });

    }
}



exports.get_tour_by_id = async (request, response)=>{

    
    try{
        const id = request.params.id;

        const tour =await Tour.findById(id);

        response.status(200).json(
            {
                status:"success",
                results:1,
                data: {'tour':tour} 
            }
        );
    }catch(error){
        response.status(404).json({
            status:'fail',
            message:error
        });
    }
    
}


exports.create_new_tour = async (request, response)=>{

  
    try{

        const newTour = await Tour.create(request.body);

        response.status(201).json({

            status:'success',
            data:{
                tour:newTour
            }
        });

    }catch(error){
        response.status(201).json({

            status:'fail',
            message:error
        });

    }


    
}


exports.update_tour_by_id = async (request, response)=>{

    try{
    
        const id = request.params.id;

        console.log(request.body);

        const tour = await Tour.findByIdAndUpdate(id, request.body, {
            new:true,
            runValidators:true
        })


        response.status(200).json(
            {
                status:"success",
                results:1,
                data: {'tour':tour} 
            }
        );
    }catch(error){
        response.status(404).json({
            status:'fail',
            message:error
        });
    }

}


exports.delete_tour_by_id =  async (request, response)=>{


    try{
        const id = request.params.id;

        await Tour.findByIdAndDelete(id);

        response.status(200).json(
            {
                status:"success",
                results:1,
                data: null 
            }
        );
        console.log('deleting');
    }catch(error){
        response.status(404).json({
            status:'fail',
            message:error
        });
    }
   



}