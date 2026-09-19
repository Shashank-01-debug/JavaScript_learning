function printName(){
    console.log('Hey there!!',this.name);
}



const user={
    name:'jatin',
    greet: printName
}

const user_2={
    name:'raj',
    greet:printName
}

user.greet();
user_2.greet();