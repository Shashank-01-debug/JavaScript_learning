const user ={
    name:'jatin',
    age: 28,
    course:'SDET master course',
    address:{
        addressLine:{
            line1:'c 304',
            line2:'vasant galaxy'
        },
                city:'Pune',
                country:'India',
                pincode :'411015'

    }
}

//console.log(user.address.pincode);
const{address:{city,country,pincode}}=user;
const{name:myName,age}=user;
console.log(myName,age);
console.log(city,country,pincode);

const{
    address:{
addressLine:{line1,line2}
    }
}=user;
console.log(line1);



