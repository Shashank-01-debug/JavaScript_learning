//through restoperator we gonna merge the values.

function add(no1,no2){
    console.log(no1+no2);
}

function add(...nos){
    console.log(nos);
   let finalSum = nos.reduce(function(total,number){
return total+number;
    },0)
    console.log('final sum',finalSum);
    
}

add(10,20);
add(20,50,80);
add(24,85,92,13);
