function add(a,b){
    console.log(a+b);
    
}

//add(10,20);

function executeTask(task){
    console.log("From execute task function");
    task();
}

executeTask(function(){
    console.log("Hello from callback function");
    
})