// Import our modules

const moment = require("moment");
const validator = require("validator")


// CREATE A FUNCTION TO SHOW THE DATE
function showDate(date) {
    return moment(date).format("MMMM Do YYYY");
}

// let test = validator.isEmail('foo@bar.com');

// console.log(test); //=> true

function validEmial(email){
    return validator.isEmail(email);
}

exports.showDate = showDate;
exports.validEmial =validEmial;