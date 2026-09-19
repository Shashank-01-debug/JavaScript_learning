let data=[{'name':'jatin','id':101,'salary':1000},
{'name':'radha','id':102,'salary':10000},
{'name':'messi','id':110,'salary':100},
{'name':'rakesh','id':144,'salary':2000}

]

let result=data.filter(x=>x.salary>500);

let result_2=data.filter(function(user){

    return user.salary<500

})

console.log(result);

console.log("_".repeat(50));

console.log(result_2);

console.log("_".repeat(50));

let ans=data.find(function(user){

    return user.id ===101

})

console.log(ans);
console.log("_".repeat(50));



let ans_2=data.find(function(user){

    return user.id ===1001

})

console.log(ans_2);

console.log("_".repeat(50));

let index=data.findIndex(function(user){

    return user.id===144;

})

console.log(index);



