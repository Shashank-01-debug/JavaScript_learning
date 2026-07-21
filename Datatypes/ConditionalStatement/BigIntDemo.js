let data = Number.MAX_SAFE_INTEGER;
console.log(`the max safe integer ${data}`);

let no1=100;
let no2 =100n;
//console.log(no1+no2); throw an error

console.log(BigInt(no1)+no2);
//bigint returns only whole number. not a decimal value

let a=10
let b=3
console.log(a/b);

let x=10n
let z=3n
console.log(x/z);
console.log(Number(x)/Number(z));

