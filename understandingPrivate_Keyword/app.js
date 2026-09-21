import {Employee} from "./Employee.js"
const e1 = new Employee('shashank',12000)
console.log(e1);
//e1.salary=8000;
//e1.city='Pune';
e1.getEmployeeData();
e1.showBonus();

console.log('**'.repeat(50));

const e2 = new Employee('Raju',1000)
console.log(e2);
//e1.salary=8000;
//e1.city='Pune';
e2.getEmployeeData();
e2.showBonus();
