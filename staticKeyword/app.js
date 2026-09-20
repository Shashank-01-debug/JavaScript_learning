import { Employee } from "./Employee.js"
const employee1 = new Employee('Vini','$ 300000');
employee1.getEmployeeInfo();

const employee2 = new Employee('Mbappe','$ 280000');
employee2.getEmployeeInfo();

const employee3 = new Employee('CR-7','$ 100000000');
employee3.getEmployeeInfo();

Employee.getTeamName()