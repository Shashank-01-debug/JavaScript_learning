import { Employee } from "./Employee.js";

const emp1 = new Employee('jatin',123000);
const emp2 = new Employee('uday',312100);
const emp3 = new Employee('Poonam',12100);


console.log(Object.hasOwn(emp1,'name')); //?true
console.log(Object.hasOwn(emp1,'work')); //! Objects of JS class is only going to have fields not Methods.

//!prototype stores objects. It stores emp.prototype
//? emp.prototype consists of cconstructor and methods.

console.log(Employee.prototype);
console.log(Employee.prototype.work);
console.log(emp1.work()===emp2.work()); //?true

console.log(Object.getPrototypeOf(emp1)===Employee.prototype); //* true
console.log(Object.getPrototypeOf(Employee.prototype)); //! null
console.log(Object.getPrototypeOf(Object.prototype));  //?null





