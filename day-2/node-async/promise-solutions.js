const agent = require('superagent');
const fs = require('fs');


const readFilePromise = (file)=>{

    let promise = new Promise( (resolve, reject)=>{

        fs.readFile(file, (file_error, data)=>{

            if (file_error) 
                reject('Error during file reading ');
            else
                resolve(data);

        })

    } )

    return promise;

}


const writeFilePromise = (file, data)=>{

    let promise = new Promise( (resolve, reject)=>{

        fs.writeFile(file, data, (file_error)=>{

            if (file_error) 
                reject('Error during file reading ');
            else
                resolve('Data saved');

        })

    } )

    return promise;

}






readFilePromise('./input.txt')
.then( (file_data)=>{

    let url = `https://dog.ceo/api/breed/${file_data}/images/random`;
    //agent return promise
    return agent.get(url)
   
})
.then ( (response)=>{

    return writeFilePromise('./output.txt', response.body.message);
})
.then((info)=>{
    console.log(info);

}).catch((error)=>{
    console.log(error);
});




/*
fs.readFile('./input.txt', 'utf-8', (file_error, file_data)=>{

    if (!file_error){

        let url = `https://dog.ceo/api/breed/${file_data}/images/random`;
        //agent return promise

        agent.get(url)
        .then( (response)=>{
            
            console.log(response.body.message);
                
            fs.writeFile('./output.txt', response.body.message, 'utf-8',(writer_error)=>{
                if (writer_error)
                    console.log('Writter error');
                else
                    console.log('Data written');
            });

        })
        .catch( (error)=>{
          
            console.log('server response error');
            
        })
        
        
       
    }
});
*/