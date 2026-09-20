class Employee{
    
    name;
    salary;
  static  empId;
  static env;

  static getTeamName(){
    console.log('Real Madrid FootBall Club'); 
  }

static{
    if(process.env.NODE_ENV==='prod'){
        console.log('selecting the prod env');
        this.env='prod';
        
    }

    else if(process.env.NODE_ENV==='QA'){
        console.log('selecting the QA env');
        this.env='QA';
        
    }
}




  static {
    // !job of static block is to initialize the static variable.
        console.log('Initialising the empId........................');
         //*  Employee.empId=0;  
            this.empId=0 //? inside static block this.empId doesn't refer to current object. It refers to class.
  }

    constructor(name,salary){
        Employee.empId++;
        this.name=name;
        this.salary = salary;
        this.empId= Employee.empId;
    }

    getEmployeeInfo(){
        console.log('EMPLOYEE INFO:');
        console.log('Employee Name:'.toUpperCase(),this.name);
        console.log('Employee salary:'.toUpperCase(),this.salary);
        console.log('Employee Id:'.toUpperCase(),this.empId);
    }
    
}

export{
    Employee
}