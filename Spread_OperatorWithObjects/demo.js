const user={
    name:'jatin',
    role:'tester'
}
console.log('user',user);
//copy of this object
const userCopy={...user};
user.role='devOps';
console.log(userCopy);
console.log('user',user);
const userCopy_2={...user,salary:8000}
console.log(userCopy_2);
console.log('initial User',user);

