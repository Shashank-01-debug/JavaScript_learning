//1. Object literal

let student={
    name:'shashank',
    age:23,
    department:'CSE',
    subject : ['DSA','java','JS'],
 mobileNumber:'2910870000'
}

//to traversing an object we use forin loop

for(let key in student){
    console.log(key,'->',student[key]);
    
}
console.log(student);

delete student.mobileNumber
console.log('_'.repeat(30));
console.log(student);


