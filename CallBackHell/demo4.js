//!asynchronous
//? login API -3 seconds
//?  userDetails API- 1 seconds
//? count API - 1.5 seconds

function login(callback){

    setTimeout(()=>{
console.log('user logged in into the application');
callback();
    },3000)
}

function userDetails(callback){
    setTimeout(()=>{
 console.log('user details Loaded');   
 callback();
    },1000)
   
}

function count(){
    setTimeout(()=>{
console.log('loaded the count for the job created today,Pending for delivery');  
    },1500)    
}

//login(userDetails);
//userDetails(count);


//!callback chaining
//! when one callback starts an operation which triggers another callback and that callback triggers
//! another async operation c/d callback chaining.

login(()=>{
    userDetails(()=>{
        count(()=>{

        });
    })
})
