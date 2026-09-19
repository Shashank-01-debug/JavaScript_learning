const add =function (no1,no2){
    return no1+no2;
}

const sub= function (no1,no2){
    return no1-no2;
}

const mul=function (no1,no2){
    return no1*no2;
}


function calculate(no1,no2, operation){

    return operation (no1,no2);
}

let result=calculate(10,20,mul);
console.log(result);
