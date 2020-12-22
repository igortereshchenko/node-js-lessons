//console.log(arguments);

const c = require('./my-modules/module1')
const m2 = require('./my-modules/module2');



const calculator = new c();

console.log(calculator.sum(1,2));

console.log(m2.add(1,2));

var myclass = new m2.my_class();

myclass.hello();


//call m3 module
require('./my-modules/module3');
require('./my-modules/module3');
require('./my-modules/module3');

