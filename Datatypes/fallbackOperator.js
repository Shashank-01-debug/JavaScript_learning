let username=0;
console.log(username || "shashank");

//fallback operators(||) check for all falsy values if it finds falcy value it will return us to fallback value i.e shashank here
//nullish coalescing(??) check for null and defined falsy values and if it find these values it return us fallback value

console.log(username ?? 'shashank')

