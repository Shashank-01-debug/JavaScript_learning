class Employee{
name;
    age;
    designation;
    salary;
    project;

    constructor(name,age, designation, salary,project){

        this.name=name;
        this.age=age;
        this.designation =designation;
        this.salary=salary;
        this.project=project;

    }

    work(){
        console.log(`${this.name} isssssssssssssss working on the project ${this.project}`);   
    }
}




export{
    Employee
}