//!callback --> callback is a function which is passed as parameter
//! HighOrder function is a function which takes callback as a parameter eg. setTimeout

let data = ()=>{
    console.log('My name is jatin');
    
}

/*
setTimeout(()=>{
//? setTimeout--> scheduling the callback for later execution.
console.log('Hi my name is jatin');

},4000)
*/

setTimeout(data,4000);