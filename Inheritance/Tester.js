import { Employee } from "./Employee.js";

class Tester extends Employee{
tools;//! specific property which is additional to other class properties
name;

static getCompanyName(){
    return `Tester is working for the company ${this.companyName}`;
}

static m2(){
    super.m2();
   console.log('Hi from Tester class');
    
}


constructor(name,age,designation,salary, project,tools,x){
    super(name,age,designation,salary,project);
    this.tools=tools;  //?additional property
    this.name=x;
}

work(){
        console.log(`${this.name} is working on the project ${this.project}`);   
    }

    demo(){
        super.work();
    }

}

export{
    Tester
}