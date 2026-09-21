import { Employee } from "./Employee.js";
class Tester extends Employee{

    tools;
    constructor(name,salary,tools) {

        //*we need to call the parent class constructor
        super(name,salary);
        this.tools = tools;
    }

    getInfo(){
        console.log('Name:',this.name);
        console.log('Salary:',this.salary); 
        console.log('Tools:',this.tools);    
    }

m2(){
        console.log('M1 Method from the Tester i.e. Parent Class...');
    }

}

export{
    Tester
}
