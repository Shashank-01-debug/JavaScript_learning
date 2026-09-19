const user={
    name:'jatin',
    loginCount:0,
    login: function(){
        console.log('Logged in successfully!!');
        this.loginCount++;
        this.printInfo();
  
    },
    printInfo(){//short hand form to write method property

        console.log('welcome', this.name);
        
    }
}

console.log(user.name);
console.log(user.loginCount);
user.login();
user.login();
user.login();
user.login();
user.login();
console.log(user.loginCount);
