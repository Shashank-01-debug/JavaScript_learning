import { Employee } from "./Employee.js";
import { Student } from "./Student.js";

const e1 = new Employee('shyam');

console.log(e1 instanceof Employee);//?true
console.log(e1 instanceof Object);//* true
//console.log(e1 instanceof Object.prototype);
console.log(e1 instanceof Student);



