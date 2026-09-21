class Employee{
     name;
    #salary;
    static #count;

    static{
        this.#count=101;
    }


    constructor(name,salary){
        this.name=name;
        this.empId=Employee.#count++;
       if (this.#validateSalary(salary)){
        this.#salary=salary;
       }
       Object.preventExtensions(this);//!prevents modifying of an object.
    }

    #calculateBonus(){
                   return this.#salary*0.1;
    }

    showBonus(){
        console.log('Bonus for the financial year ........');
        console.log(this.#calculateBonus());
        
        
    }

    get salary(){
        return this.#salary;
    }

    #validateSalary(salary){
        if (salary >0 && typeof salary ==='number'){
            return true;
        }
        else{
          throw  new Error('Invalid salary ! salary >0 and should be number' );
        }
    }

    getEmployeeData(){

        console.log('Employee Information'.toUpperCase());
        console.log('Employee Name:'.toLowerCase(), this.name);
         console.log('Employee salary:'.toLowerCase(), this.#salary);
    }
}

export{
    Employee
}