const greet = ()=> {
    console.log("hello");
    
}

function executeTask(task){

    console.log("hello.............executing task");
    task();
}

executeTask(greet);

const add = (a,b)=>{
    console.log('adding 2 values');
    console.log(a+b);

}
console.log('_'.repeat(30));
//executeTask(function(){add(2,3)})
executeTask(()=> {add(2,3)});   //to give parameter

const multiple = function(number){
    console.log(number*10);
}

console.log('_'.repeat(30));
//executeTask(()=>{multiple(20)})
executeTask(()=>{
    multiple(20);
})