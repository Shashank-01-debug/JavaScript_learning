const userPersonalData={
    name:'jatin',
    age:31,   
    city:'pune',
    role:'Manual Tester'
}

const userProfessionalData ={

role:'Automation Tester',
Current_company:'LTM',
experience :12 
}

const employeeData ={...userPersonalData,...userProfessionalData};
console.log(employeeData);
