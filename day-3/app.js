//MVC
const express = require('express');
const fs = require('fs');

const tours = JSON.parse( fs.readFileSync(`${__dirname}/dev-data/data/tour.json`,'utf-8'));

const app = express();


//middleware
app.use(express.json());



//tours CRUD
//get all tours
app.get('/api/v1/tours', (request, response)=>{

    response.status(200).json(
        {
            status:"success",
            results:tours.length,
            data: { tours}
        }
    );
});

//get by id 
app.get('/api/v1/tours/:id', (request, response)=>{

    const id = request.params.id*1;

    const tour = tours.find(element=>element.id==id);

    if (!tour){

        return response.status(404).json({

            status:"fail",
            message:`Not found id ${id}`
        });

    }

    response.status(200).json(
        {
            status:"success",
            results:1,
            data: {'tour':tour} 
        }
    );
    
});


//create new tours
app.post('/api/v1/tours', (request, response)=>{

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


    
});


// update
app.patch('/api/v1/tours/:id', (request, response)=>{

    const id = request.params.id*1;

    const tour = tours.find(element=>element.id==id);

    if (!tour){

        return response.status(404).json({

            status:"fail",
            message:`Not found id ${id}`
        });

    }

    response.status(200).json(
        {
            status:"success",
            results:1,
            data: {'tour':'TODO update'} 
        }
    );

});


//delete
app.delete('/api/v1/tours/:id', (request, response)=>{

    
    const id = request.params.id*1;

    const tour = tours.find(element=>element.id==id);

    if (!tour){

        return response.status(404).json({

            status:"fail",
            message:`Not found id ${id}`
        });

    }

    response.status(204).json(
        {
            status:"success",
            results:1,
            data: null 
        }
    );



});

app.listen(3000,()=>{
    console.log('Application Tours started...');
})



