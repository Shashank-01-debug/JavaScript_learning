function greetUser(userName){
    console.log('Hi', userName);
    
}

function processingData(callback, userName) {
  console.log('Processing User data.....');
  setTimeout(() => callback(userName), 2000);   // runs after 2 seconds
}
processingData(greetUser, 'jatin');
console.log('Next line');