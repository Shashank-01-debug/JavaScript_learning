import { Employee } from "./Employee.js";

class Tester extends Employee{
tools;//! specific property which is additional to other class properties

constructor(name,age,designation,salary, project,tools){
    super(name,age,designation,salary,project);
    this.tools=tools;  //?additional property
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