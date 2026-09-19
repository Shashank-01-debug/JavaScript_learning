function validateNumber(n1,n2){
if(typeof n1==='number' && typeof n2==='number'){
    return true;
}
else{
   throw new Error('Invalid Number Type');
}
}

function add(n1,n2){
    validateNumber(n1,n2)
    return n1+n2;
}

function sub(n1,n2){
    validateNumber(n1,n2)
    return n1-n2;
}

function mul(n1,n2){
    validateNumber(n1,n2)
    return n1*n2;
}

function div(n1,n2){
    validateNumber(n1,n2)
    if(n2===0){
        throw new Error('Number 2 can not be Zero' )
    }
    return n1/n2;
}

export{
    add,sub,mul,div
}