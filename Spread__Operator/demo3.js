//add new elements in array 

const browser =['chrome', 'Firefox'];
//copy of this array
const newBrowser =['Brave',...browser,'IE'];
console.log('new Broswer',newBrowser);
console.log('browser',browser);
newBrowser.push('edge');
console.log(newBrowser);
browser.push('safari');

console.log('new Broswer',newBrowser);
console.log('browser',browser);
