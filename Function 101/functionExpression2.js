//A callback is a function you pass as an argument to another function, which then gets "called back" (executed) at a
// later point — usually after some operation completes.


let greet = function(){
    console.log("Hello there !!!");
    
}

let task2= function(){
    console.log("good Bye !!!");
    
}

function executeTask(task){
    console.log("executing the task............");
    task(); //execute the function which we are passing as parameter.
    
}

executeTask(greet);
console.log('_'.repeat(40));
executeTask(task2)