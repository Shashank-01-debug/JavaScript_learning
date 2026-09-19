const user ={
    name:'Rahul',
    age:'30',
    city:'pune',
    role:'SDET'
}
//Destructuring
const {name,age,city,role}=user;
console.log(name);
console.log(age);
console.log(city);
console.log(role);

console.log('__'.repeat(40));


//Destructuring using rest Operator
const{name:userName,...x}=user
console.log(userName);
console.log(x);
console.log('__'.repeat(40));

const{...y}=user;
console.log(y);
