const data = [10,200,30];

//transformation we use map function inside js
//const result1=data.map(function(number){
  //  return number*2;
//})

//transformation--> Map --> HOF --> (callback)

let multiplier = function(number){
    return number*2;
}
const result = data.map(x=>x*2);
console.log(result);

console.log(data.map(multiplier));

console.log("forEach():-");
data.forEach(number=> console.log(number))
for( let x in data){
    console.log(x);
}

const greaterThan20=data.filter(x=>x>20);
console.log(greaterThan20);
//find is going to give first matching value

const users=[
{'id':503,'name':'jatin'},
{'id':109,'name':'uday'},
{'id':80,'name':'Rakhi'}
];

const findFirst=users.find(value => value.id === 80 )

console.log(findFirst);







