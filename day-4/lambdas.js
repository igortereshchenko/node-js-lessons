const { search } = require("superagent");

function hello ()
{
   return 'hello';
}


function sum(a,b){
   return a+b
}


//upload to mem arrow function
const ptr_mem_sum_function = function (a,b){
   return a+b
}


//lambda module
//mem stak papameters
| ptr1  |
| ptr2  |
|_ptr3__|          
{
   return ptr1+ptr2+ptr3
}


const ptr_on_callable = (a,b,c)=>{
   return a+b+c
}

ptr_on_callable(1,2,3)


//mem names dictionary
{

   hello : 1
   sum: 7

}

//load
x = sum(sum(sum(1,2),3),4);

//memories reads
read search read goto 7 line
3       3      3             9


x = ptr_mem_sum_function(ptr_mem_sum_function(ptr_mem_sum_function(1,2),3),4);
1                                   1              1