const user ={
    name:'jatin',
    age:28,
    address:{
        city:'pune',
        pin:'474011'
    }
}

const copyUser ={...user}
console.log(copyUser);
user.address.pin='0751'

console.log(copyUser);

//I changed the pin of user but copyUser's pin also got changed.
//so, through spread operator we do the shallow copy. so, inside nested loops
//deep copy don't takes place.



