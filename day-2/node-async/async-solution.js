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

        console.log(data);

        fs.writeFile(file, data, 'utf-8',(file_error)=>{

            if (file_error) 
                reject('Error during file reading ');
            else
                resolve('Data saved');

        })

    } )

    return promise;

}



const loadData = async ()=>{

    
    try{
        const file_data = await readFilePromise('./input.txt');

        const response1 = 
        agent.get(`https://dog.ceo/api/breed/${file_data}/images/random`) ;

        const response2 = 
        agent.get(`https://dog.ceo/api/breed/${file_data}/images/random`) ;

        const response3 = 
        agent.get(`https://dog.ceo/api/breed/${file_data}/images/random`) ;

        const all = await Promise.all([response1, response2, response3]);

        const data_txt = all.map(element => element.body.message);

        //console.log(data_txt.join('\n'));

        await writeFilePromise('.output.txt', data_txt.join('\n'));

    }catch(error){

        console.log(error);
    }
}

//run
//loadData();



(async ()=>{
   
    console.log('Start');

    await loadData();

    console.log('Finish');
    
})();