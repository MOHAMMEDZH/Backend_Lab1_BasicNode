
// Import our modules
const test = require('./test');
const res = test.showDate(new Date());

var correctEmail = "mohammed@gmail.com";
var wrongEmail = "mohammed@gmailcom"

const res1 = test.validEmial(correctEmail);

console.log(res);
console.log("The email is : "+ res1);