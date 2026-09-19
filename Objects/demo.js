let names=['jatin','raj','rahul'];
console.log(typeof names);

let user={

    first_name:'shashank',
    age : 20,
    isActive : true,
    marks :[75,80,90],
    greet: function(username){
        console.log(`Hello ${username}`);   
    },
    address:{
        line_1:'H 1705',
        appartment: 'Megapolis Mystic',
        city : 'Bengaluru',
        Pincode : '411015'
    }

}
console.log(user);
console.log('_'.repeat(50));


console.log(user.first_name);
console.log('_'.repeat(50));
console.log(user.address);
console.log(user.marks[2]);
//calling function
user.greet();
user.greet('Uday');

//nesting of objects
console.log(user.address.line_1);
console.log(user.address.city);
console.log('_'.repeat(50));

//in returns key of object
for(let key in user){
    console.log(key);
    
}
console.log('_'.repeat(50));
for(let key in user){
    console.log(key,'=======',user[key]);
    
}
