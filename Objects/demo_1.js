 let userData ={
    username:'jatin'
 }
 console.log(userData);
 

 //2nd way to create an object is with the Object()

 let data = new Object();
 console.log(data);
 data.name='raj'
 console.log(data);
 
 console.log('_'.repeat(50));
 //3rd way to create an object is through Object.create  
 let student = Object.create(userData); //creates object using prototype
student.name='ritu'
console.log(student);
console.log(Object.getPrototypeOf(student));
console.log(student.username);
console.log(student.x);






 