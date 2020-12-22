const agent = require('superagent');
const fs = require('fs');

fs.readFile('./input.txt', 'utf-8', (file_error, file_data)=>{

    if (!file_error){

        let url = `https://dog.ceo/api/breed/${file_data}/images/random`;
        agent.get(url,(error, response)=>{

            if(!error){
                console.log(response.body.message);
                
                fs.writeFile('./output.txt', response.body.message, 'utf-8',(writer_error)=>{
                    if (writer_error)
                        console.log('Writter error');
                    else
                        console.log('Data written');
                });
            }
        })
    }
});