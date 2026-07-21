//for loop

const data=['jatin','messi','bellingham','vinicius','mbappe'];

for(let i=0;i<data.length;i++){
   // console.log(data[i]);  
}

//for of loop

for(let username of data){//similar to for each loop in java
//console.log(username);

}

let user='jatin';

for(let charater of user){
   // console.log(character);
    
}

//for in loop---> used to handle objects
for(let x in data){    //will get index value.
    //console.log(x);
    
}


let response ={username:'Bellingham', age:23, club:'Real Madrid'};

for(let data in response){

    console.log(data+":"+response[data]);//when for-in loop handle object it returns key.
    
}
