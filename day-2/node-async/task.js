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
        const file_data = await readFilePromise('./1.txt');


        const d1 =  readFilePromise('./d1.txt');
        const d2 =  readFilePromise('./d2.txt');
        const d3 =  readFilePromise('./d3.txt');

        const all = await Promise.all([d1, d2, d3]);


        await writeFilePromise('output.txt', `${file_date}\n${all.join('\n')}`);

    }catch(error){

        console.log(error);
    }
}

//run
loadData();
