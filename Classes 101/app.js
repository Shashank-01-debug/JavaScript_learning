import { Employee } from "./Employee.js";

const e1 = new Employee('Bellingham',23,'9000','CAM')
console.log(e1);

const e2 = new Employee('Vinicius',23,'9000','LW')
console.log(e2);

const e3 = new Employee('Modric',39,'9000','CM')
console.log(e3);

const e4 = new Employee('Sergio Ramos',23,'9000','CB')
console.log(e4);

console.log('_'.repeat(40));


e1.marksAttendance();
e4.marksAttendance();