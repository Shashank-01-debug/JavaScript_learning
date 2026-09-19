const browsers=['chrome','Edge','Firefox'];
//destructure

const[b1,b2,b3]=browsers
console.log(b1);

const[browser,...x]=browsers
console.log(x);//edge, Firefox
console.log(browser);


