const user ={
    name:'jatin',
    age:29,
    role:'tester',
    company:'Infosys'

}

console.log(user);

//if any property got updated then 
const updatedUser ={...user,role:'Automation Tester',name:'shashank',company:'Capgemini'};
console.log(updatedUser);
