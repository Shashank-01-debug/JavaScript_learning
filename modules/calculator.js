/*

**  what is module
? different types of module
! 
*/
const appName ='Calculator App'
const user={

    name:'shashank',
    age:15,
    role:'SDET'

}

function add(number1,number2){

    console.log('addition Result',number1+number2);
    
}

 function sub(number1,number2){

    console.log('subtraction Result',number1-number2);
    
}

 function multiplication(number1,number2){

    console.log('multiplication Result',number1*number2);
    
}

 function div(number1,number2){

    console.log('Division Result',number1/number2);
    
}

function demo(){
    console.log('Hello from demo');
    
}


export default demo;  //default export

export{ //named export
    user,appName,add,sub //name of properties that you want to export i.e. functions, variables, objects
}



/*
console.log('welcome to tech with jatin---calculator');
add(8,9);
sub(9,45);
multiplication(5,90);
div(8,4);
*/
