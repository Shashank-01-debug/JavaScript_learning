
let person={
    name:'jatin',
    age:16,
    isActive:true
}

let studentRef= Object.create(null);
console.log(studentRef);
studentRef.shoes='adidas';
console.log(studentRef);

console.log('-'.repeat(40));

let studentReference = Object.create(person);
studentReference.shoes="Nike"
console.log(studentReference);
console.log(Object.getPrototypeOf(studentReference));
console.log(studentReference.name);

