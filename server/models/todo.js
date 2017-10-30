// require the normal mongoose library
// this way you can keep the dependencies manageable.
var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true  //trims all leading and trailing white spaces
  },
  completed: {
    type: Boolean,
    default: false
  },
  completeAt: {
    type: Number,
    default: null
  }
});

module.exports = {Todo};
