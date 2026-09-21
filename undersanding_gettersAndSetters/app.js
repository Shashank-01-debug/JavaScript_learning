import { Employee } from "./Employee.js";

const emp1 = new Employee('Rodrygo',4000,'LW','REAL MADRID FOOTBALL CLUB' )
emp1.salary=21000;  //!use of setters method in JS
emp1.getEmployeeInfo();
console.log('*'.repeat(30));
console.log('use of get keyword in JS:',emp1.salary);

/*
console.log('*'.repeat(30));

const emp2 = new Employee('Diomande',7000,'LW','REAL MADRID FOOTBALL CLUB' )
emp2.getEmployeeInfo();

//console.log('Reading the salary of emp2');
//console.log(emp2.getSalary());

//emp1.city='pune' //!In JS we can add property outside the class. which is not a good practice.
//!so, to prevent this to happen we use Object.preverntExtensions(this) from modification.
*/
