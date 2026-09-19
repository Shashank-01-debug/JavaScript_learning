//splice is used for remove, insert and replace.
let data=[20,3,10,7,40,4];

let result=data.splice(1,3);//delete 3 elements from 1st index.
console.log(result);
console.log(data);


//insertion

data.splice(0,0,100);//insert 100 on 0th index.
console.log(data);

//replace
data.splice(0,1,92);
console.log(data);


