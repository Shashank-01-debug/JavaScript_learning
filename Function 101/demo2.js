
greet('shashank');


function greet(){
    console.log("Greet 2 Function !!");
}

function greet(name='Guest'){
    //set default value to the parameter
    console.log("Hello",name);
    
}

greet();
//No function overloading in javaScript.