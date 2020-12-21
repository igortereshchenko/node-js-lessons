

//template text, product json
module.exports = (template, product) =>{

    let html = template.replace(/{%id%}/g, product.id);
    html = html.replace(/{%product_name%}/g, product.product_name);
    html = html.replace(/{%product_price%}/g, product.product_price);

    return  html;
    
}