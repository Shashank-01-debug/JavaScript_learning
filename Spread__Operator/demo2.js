//spread operator: Create copy of an array
const arr1 =[10,20,30]
const arr2 =arr1; //this is not an array copy!! here, arr2 is only reference which points to same array.
console.log(arr1);
arr1.push(40);
console.log(arr1);
console.log(arr2);//arr2 modified but we don't change the value of arr2. we push in arr1.

console.log("creating copy with spread operator....");
const arr3 =[...arr1]// through this arr3 get a new array which is same as arr1.
arr1.push(99);
console.log(arr3); //10,20,30,40
console.log(arr1);//10,20,30,40,99




