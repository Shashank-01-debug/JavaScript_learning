let a=[10,20,30];
let b=[20,30];
let c=[100];

let result=a.concat(b,c);
console.log(result);

result.forEach(function(value,index){
    console.log(`${index}==${value}`);
})
