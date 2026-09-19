//Definition:
//destructuring: way to extract the values from the array or the properties
//of an object in a simple way

//creating JS object
const user={
    name:'jatin',
    age:'23',
    course:'SDET master class'
}
let x= user.name;
let y = user.age
let z = user.course

console.log(x,y,z);


//destructuring of an object
const{age,course,address='India'}=user;
console.log(age,course,address);

//mapping the property to new variableName
const{name:username}=user;
console.log(username);

