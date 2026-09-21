class Employee{
//? In java there are instance variable 
//! but in JS refers to the class members as fields or properties

//**these are fields/Properties in JS

#name;
#salary;
#empId;
static #counter; //* which belongs to class not to the Object...
#designation;
#project;

static{
//! to initialise the static variables
//! here in static block this refers to the class name.
this.#counter=101;
}

constructor(name,salary,designation,project){

    if(typeof name==='string' && this.#validateSalary(salary)){
    this.#name=name;
    this.#salary=salary
    this.#designation=designation;
    this.#project=project;
    this.#empId = Employee.#counter;
    Employee.#counter++;
    Object.preventExtensions(this);

    }

}

get salary(){
    return this.#salary;
}
set salary(salary){
    if(this.#validateSalary(salary)){
        this.#salary=salary;
    }
}

getEmployeeInfo(){

    console.log('Employee Info:'.toUpperCase());
    console.log('Employee Name'.toUpperCase(),':',this.#name);
    console.log('Employee Salary'.toUpperCase(),':',this.#salary);
    console.log('Employee Designation'.toUpperCase(),':',this.#designation);
    console.log('Employee project'.toUpperCase(),':',this.#project);
    console.log('Employee EmpID'.toUpperCase(),':',this.#empId);
}

#validateSalary(salary){
    if(typeof salary === 'number' && salary >0){
        return true;
    }
    else {
        throw new Error('Invalid salary and should be greater than 0')
    }

}

}
 Object.preventExtensions(Employee);

export{
    Employee //!named export
}