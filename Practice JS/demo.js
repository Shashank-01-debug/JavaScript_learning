//!Write the code to count the number of spaces of a given string

const input ='dadja   312';
let count=0;

for(const ch of input){
    if(ch===' '){
        count++;
    }
}

console.log(count);



