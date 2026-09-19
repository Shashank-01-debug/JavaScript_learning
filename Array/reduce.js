let data=[10,20,30,40,50];

 //let sum=data.reduce(0,(a,b)=>a+b);
// console.log(sum);
 let add= data.reduce(function(accumlated,currentNumber){

    return  accumlated+=currentNumber;

 },0)

 //console.log(add);

 let sum_1= data.reduce((accumlat,number)=>{

    return accumlat+=number;

 },0
)
 
console.log(sum_1);



 //using for loop
let sum=0;
 for(let number of data){

    sum+=number;

 }
 //console.log(sum);
 