import { Developer } from "./Dev.js";
import { Employee } from "./Employee.js";
import { Tester } from "./Tester.js";

const tester1 = new Tester('poonam',18,'1000','Manual Tester','Barclays','Playwright','Bond-oo7');
console.log(tester1);
tester1.work(); //? Method overriding
console.log('_'.repeat(50));
tester1.demo(); //!calling work method from the parent Employee class.
console.log('_'.repeat(50));


const dev1 = new Developer('Macallister',33,50000,'c# Developer','Google');
console.log(dev1);
dev1.work(); 
console.log('_'.repeat(50));
console.log(Employee.getCompanyName()); //! EPAM
console.log(Tester.getCompanyName());
console.log('_'.repeat(50));
Tester.m2();



 





