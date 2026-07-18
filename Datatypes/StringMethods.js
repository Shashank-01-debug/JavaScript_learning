let emailAddress =`shashankb150@gmail.com`;
//length of string.
console.log( emailAddress.length);

let newEmailAddress=emailAddress.toUpperCase();
console.log(newEmailAddress);

let x =`      hello  `;
console.log(x);
let trimmedX=x.trim();
console.log(trimmedX);

console.log(emailAddress.includes(`@gmail.com`));
console.log(emailAddress.includes(`@yahoo.com`));

console.log(emailAddress.indexOf(`k`));

console.log(emailAddress.startsWith(`shashank`));

console.log(emailAddress.endsWith(`.comm`));

//substring and slicing

let userName= emailAddress.slice(0,8);
console.log(userName);

let domain=emailAddress.slice(-9);
console.log(domain);

//substring
let user=emailAddress.substring(0,8);//In substring we can't use negative values.
console.log(user);

let newResult=emailAddress.replace(`shashank`,`raj`);
console.log(newResult);
let z=emailAddress.replace('s','f');
console.log(z);

let z_1=emailAddress.replaceAll(`s`,`f`);
console.log(z_1);








