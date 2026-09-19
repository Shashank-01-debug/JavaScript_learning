import {add,div} from './calculator.js'
/*
! Error is a problem that occurs in our program and it deviates us from the normal 
! execution of our program
? Different Types of error
-syntax error
- Run time error eg Reference Error
-Logical error: Devs fault! Eg divide by 0,

*/

let data;
try{
data = add(10,'20');

console.log(data);
}
catch(error){
    console.log(error.message);
    
}
try{
data = div(50,0);
console.log(data);
}
catch(error){
    console.log(error.stack);
    
}

finally{

    //execute irrespective whether error happened or not !!!
    console.log(`close the App..`);
    
}

