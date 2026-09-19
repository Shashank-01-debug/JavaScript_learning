//Rest Operator:
//revise spread operator


const arr1=[10,20,30];
console.log(arr1);
console.log(...arr1); //just print the values..

const copyArr1= [...arr1];
console.log(copyArr1);
arr1.push(55);
console.log('arr1',arr1);
console.log('copy of arr1',copyArr1);



