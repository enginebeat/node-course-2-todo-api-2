var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

//Setting module exports
// normally you would use:
//module.exports = {
//  mongoose: mongoose,
//  other variables or functions to be made available
//};
// the meaning here is, export the variable mongoose from the
// module named mongoose. then it can be used on any other files.
// As per ES6 if you have a function/variable with hte same name as the
// module you can simplify as bellow.
module.exports = {mongoose};
