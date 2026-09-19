// spread operator symbol is ...
/*
... is to expand the value of any iterable eg [array,String] or
properties of an objects
*/

const arr=[110,22,300];
for (let x of arr){

    console.log(x);
    
}

arr.forEach(function(x){
    console.log(x);
})


console.log('__'.repeat(10));
console.log(...arr);

