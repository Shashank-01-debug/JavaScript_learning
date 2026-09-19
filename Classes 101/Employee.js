class Employee{
/*
    !properties
    ? class have properties and it consists of Key and methods
    * function written inside class is called method
    ! constructor is special method whose job is to initialise properties of Object.
    ! constructor is going to be called every time when you create object using new keyword.
    ! In JS you can't do constructor overloading. you can have only one constructor per class.
    ? this keyword is used to access the specific property of the object.
*/

    name;
    age;
    salary;
    Position;

    constructor(name,age,salry,Position){
        //this keyword refers to current Object/Properties
                 this.name=name;
                 this.age=age;
                 this.salary=salry;
                 this.Position=Position;
    }
    
    marksAttendance(){
        console.log(`Attendance marked for the employee ${this.name}`);
        
    }
}

export{
    Employee
}