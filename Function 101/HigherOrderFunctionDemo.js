const data=function(){
console.log('hello from data');
}
//function passed as parameter to another function is called callback function. 
//data();

//function which takes another function as parameter
//is called Higher order function .so, here execute() is an higher order function.

function execute(task){
    console.log("hello from execute !!!");
    task();
}

execute(data);