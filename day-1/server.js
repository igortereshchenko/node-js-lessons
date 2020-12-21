const http = require('http');
const url = require('url');
const fs = require('fs');
const render = require('./modules/renderTemplate');
// render(template, product)

const db = fs.readFileSync('./day-1/data/db.txt','utf-8');
const dataJSON = JSON.parse(db);

const product_template = fs.readFileSync('./day-1/templates/product.html','utf-8');


server = http.createServer( (request, response)=>{


    const url_info = url.parse(request.url,true);

    //console.log(url_info.pathname);
    const pathname = url_info.pathname;
    //get parameters json 
    const query = url_info.query;

    //all-products
    if (pathname === '/all-products'){

        response.writeHead(200,{
            'Content-type':'application/json'
        });
        response.end(db);
    }
    // /product?id=
    else if (pathname === '/product'){
        const id = query.id;

        response.writeHead(200,{
            'Content-type':'text/html'
        });

        //response.end( JSON.stringify(dataJSON[id]) );
        html = render(product_template, dataJSON[id]);
        response.end(html);
    }
    else{
        response.writeHead(404,{
            'Content-type':'text/html',
            'date':'21.12.2020'
        });

        response.end('<b>Page not found</b>');
    }
});


server.listen(8000,'localhost', ()=>{

    console.log('Listening 8000 port ...');
})