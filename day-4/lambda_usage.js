

const mult = (a,b)=>{ return a*b}
const add = (a,b)=>{return a+b}


function call_back(param1, param2, prt_callback_function){

    return prt_callback_function(param1,param2)
}


call(1,2, (a,b)=>{ return a+b });
call(1,2, add);


