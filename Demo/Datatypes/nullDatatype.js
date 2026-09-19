//undefined -->js--> there is no value!!
//JS---> null ----> no value---> but dev explicitly 

let username;
console.log(username);
console.log(typeof username);//type of undefined is undefined.
console.log("---------------------------------------------");

let user= null;
console.log(user);
console.log(typeof user);//type of null is object


console.log(user == username);//loose equal--> only compares value
console.log(user === username); //strict equal --> compares value as well as type



