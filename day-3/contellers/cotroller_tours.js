
const fs = require('fs');
const tours = JSON.parse( fs.readFileSync(`${__dirname}/../dev-data/data/tour.json`,'utf-8'));



exports.check_id = (request, response, next, value)=>{


    console.log(`Middleware get parameter ${value}`);

    const id = request.params.id*1;


    const tour = tours.find(element=>element.id==id);

    if (!tour){

        return response.status(404).json({

            status:"fail",
            message:`Not found id ${id}`
        });

    }

    next();

}


exports.check_new_tour = (request, response, next)=>{

    
    console.log('Check new tour widdleware');
    if(!request.body.name){

        return response.status(400).json({

            status:"fail",
            message:`Not found name in json data`
        });
    
        }
    
    next();
};


exports.get_all_tours=(request, response)=>{

    response.status(200).json(
        {
            status:"success",
            results:tours.length,
            data: { tours}
        }
    );
}



exports.get_tour_by_id = (request, response)=>{

    const id = request.params.id*1;

    const tour = tours.find(element=>element.id==id);

    response.status(200).json(
        {
            status:"success",
            results:1,
            data: {'tour':tour} 
        }
    );
    
}


exports.create_new_tour = (request, response)=>{

    // get new if grom db
    const new_id = tours.length;

    const newTour = Object.assign( {id: new_id} ,request.body);
    tours.push(newTour);

    fs.writeFile(`${__dirname}/dev-data/data/tour.json`,
                    JSON.stringify(tours), 'utf-8', (error)=>{

                        //TODO if file error
                        response.status(201).json(
                            {
                                status:"success",
                                results:1,
                                data: {'tour':newTour} 
                            }
                        );

                    });


    
}


exports.update_tour_by_id = (request, response)=>{

    const id = request.params.id*1;

    const tour = tours.find(element=>element.id==id);


    response.status(200).json(
        {
            status:"success",
            results:1,
            data: {'tour':'TODO update'} 
        }
    );

}


exports.delete_tour_by_id = (request, response)=>{

    
    const id = request.params.id*1;

    const tour = tours.find(element=>element.id==id);

    response.status(204).json(
        {
            status:"success",
            results:1,
            data: null 
        }
    );



}