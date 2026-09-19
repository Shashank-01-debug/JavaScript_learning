//Array destructuring
//object destructuring on the basis of properties
//array destructuring should be on the basis of value.

const browser =['chrome','safari','firefox','edge']
console.log(browser[0]);
console.log(browser[1]);
console.log(browser[2]);

console.log('_'.repeat(50));

//destructuring
const[b1,b2,b3,b4] =browser;
console.log(b1,b3,b2,b4);

const[B1,,B3,B4]=browser
console.log(B1,B3);

