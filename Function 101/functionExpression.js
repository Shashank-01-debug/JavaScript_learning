let result=1+1;
let result1=10;
let result2='jatin'
let result3={name:'jatin'};
let result4= [2,3,4];


let greet= function(){

    console.log('Hello there !!!');
    
}

greet();
console.log(greet);//--> this will give you reference information...


function add(number1,number2){

    console.log(number1+number2);
    
}

add(result,result1);