function greetUser(userName){
    console.log('Hi', userName);
    
}

function processingData(callback, userName){
    console.log('Processing User data.....');
    callback(userName);
}

processingData(greetUser,'jatin');
greetUser('shashank');