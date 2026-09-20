class Employee{
    name;
    age;
    designation;
    salary;
    project;
    //! i want store the company name inside property
    static companyName='EPAM';

   static getCompanyName(){
        return this.companyName; // ? here, this.companyName refers to class Employee.
    }

    static m2(){
        console.log('Hi from Employeee');
        
    }

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