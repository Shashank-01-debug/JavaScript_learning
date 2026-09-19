let data=[50,4,200,8,90];
let x =data.sort();
console.log(x);


data.sort((a,b)=>a-b);  //Ascending order
console.log(data);

data.sort((a,b)=>b-a);  //descending order
console.log(data);

