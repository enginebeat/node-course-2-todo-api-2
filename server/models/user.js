// require the normal mongoose library
// this way you can keep the dependencies manageable.
var mongoose = require('mongoose');


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

module.exports = {User};
