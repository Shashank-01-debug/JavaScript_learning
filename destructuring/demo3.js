//destructuring the function

function printUser(user){
    console.log(user.id);
    console.log(user.name);
}

//destructuring the function parameter
function printUser({id,name}){
    console.log(id,name);
    
}

function printUser({id,name}){ 
    console.log('hello from  Latest printUser Function !');
    
    console.log(id,name);
    
}

const user ={
    id:102,
    name:'jatin'
}



printUser(user);