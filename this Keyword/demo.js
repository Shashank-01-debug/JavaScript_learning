let user={
    name:'shashank',
    age:23,
    isActive:true,

    greet:function(){
       
        console.log("hello",this.name);
        
        
    }
}

console.log(user.name);
console.log(user.age);
user.greet();

