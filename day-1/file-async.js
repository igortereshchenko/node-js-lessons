const fs = require('fs');


function after_file_reed(error, data){

    if (error)
        console.log('Error in reading');
    else
        console.log(data);

    console.log('End file processing');    
}


fs.readFile('./data/input.txt','utf8',after_file_reed);


console.log('File is reading...');


fs.readFile('./data/input.txt','utf8',  (err, data)=>{ 
    console.log('done');
    console.log(data);
    }
);

//const filename = fs.readFileSync('./data/start.txt','utf-8');

//const data = fs.readFileSync(`./data/${filename}`, 'utf-8')

//fs.writeFileSync('./data/output.txt',data, 'utf-8')


fs.readFile('./data/start.txt','utf-8',(e,filename)=>{

    if (!e)
        fs.readFile(`./data/${filename}`, 'utf-8', (e, data)=>{

         if(!e)   
            fs.writeFile('./data/output.txt',data,'utf-8', ()=>{

                console.log('Done');
            })
        })
})
