import { Employee } from "./Employee.js";
//!practice prototype

const e1 = new Employee('jatin',123);
console.log(Object.getPrototypeOf(e1)===Employee.prototype);
//here Employee.prototype stores constructor and methods
console.log(Object.getPrototypeOf(Employee.prototype));//{} i.e Object
console.log(Object.getPrototypeOf(Employee.prototype)===Object.prototype);
console.log(Object.getPrototypeOf(Object.prototype)); //!null


