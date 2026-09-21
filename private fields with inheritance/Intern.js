import { Tester } from "./Tester.js";
class Intern extends Tester{

#collegeName;

    constructor(name,salary,tools, collegeName){
        super(name,salary,tools);
        this.#collegeName=collegeName;
    }

    m3(){
        console.log('M3 Method from the Intern Class.....');
    }

}

export{
    Intern
}
