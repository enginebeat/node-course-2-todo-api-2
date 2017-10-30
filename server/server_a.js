

var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');


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


// var newTodo = new Todo({
//   text: 'Cook Dinner'
// });
//
// newTodo.save().then(
//   (doc) => {
//       console.log('Saved todo', doc);
//   }, (e) => {
//     console.log('Unable to save todo');
//   }
// );

var otherTodo = new Todo({
  text:'Something to do'
  //text: 23  This will still work as mongoose will cast it to a string.
  //text: true this will also work as it will turn it into the string "true"
  // obviously you need to take care with this feature as it may trip you up
});

otherTodo.save().then(
  (doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
  }, (e) => {
    console.log('Unable to save', e);
  }
);

//User model
//email - require it - trim it - set type - set min length of 1
var User = mongoose.model('User',
  {
    email: {
      type: String,
      required: true,
      trim: true,
      minlength: 1
    }

  }
);

var newUser = new User({
  email: '    luis.moreira@lmtronics.co.uk            '
});

newUser.save().then(
  (doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
  }, (e) => {
    consle.log('Unable to save User');
  }
);
