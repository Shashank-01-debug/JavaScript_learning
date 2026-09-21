class Employee{
    #name;
    #salary;

    constructor(name,salary){
        this.#name=name;
        this.#salary=salary;
    }

    get name(){
        return this.#name;
    }

    set name(name){
        this.#name=name;
    }

    get salary(){
        return this.#salary;
    }

    set salary(salary){
        this.#salary=salary;
    }

    m1(){
        console.log('M1 Method from the Employee class i.e. Grand Parent Class...');
    }


}

export{
    Employee
}