
let data = ()=>{
    console.log('Hello');
}

//let printName = ()=>{
 //   console.log('shashank');
    
//}

function execute(task){
    console.log("Hello from execute function !!!"); 
     task();
   ;
   
}

execute(data);

console.log('_'.repeat(40));

//execute(printName);
execute(()=>{
    console.log('shashank');
    
});

let add= (no1,no2)=>{
  console.log(no1+no2);
   
}

execute(()=>{add(2,5)});