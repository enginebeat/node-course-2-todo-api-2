//***Remember that all of this operations are asynchronous****
// So all this operations on the db may, will, appear in a random
// order depending on how long they take and other factors.

// check the mongodb native driver API for more methods, may need more
// research later. specially check the cursor part which is what you get
// when you call .find().

//const MongoClient = require('mongodb').MongoClient;
// instead of using the code above to call the MongoClient out of the
// mongodb library use instead object destructuring as bellow.
// we can also call different objects and properties in one go by commas
// separate them.
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // findOneAndUpdate()
  // format: findOneAndUpdate(filter, update, options, callback)
  // quite a few interesting things to look at on this one.
  // for starters look at the Mongodb native api. look at collections and then
  // at findOneAndUpdate.
  // it takes three parameters + the callback function which is optional.
  // In our case we are actually using a promise.
  // Parameters:
  // Filter - this is defining the query criteria for the document you want
  // update as per normal.
  // update - this will define what you want to update and what operation
  // you want to execute on it. for the update operator search for "mongodb
  // update operators". The one used here is $set which sets the value of a
  // field in a document.
  // options - this one is interesting. In our case we are using
  // the returnOriginal option and setting it to false to return the updated
  // document. but again if you wantred to give the option of undoing the
  // you could return the original and if undo was selected you would update
  // the updated document with the old value.

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('59f45818845ea90aee2ad12b')},
  //   {$set: {
  //     completed: true}
  //   }, {
  //     returnOriginal: false
  //   }).then(
  //       (result) => {
  //         console.log(result);
  //       }
  //   );

  // Exercises
  // findOneAndUpdate change name to Luis
    // db.collection('Users').findOneAndUpdate({
    //   name: 'Ana'},
    //   {$set: {
    //     name: 'Luis'}
    //   }, {
    //     returnOriginal: false
    //   }).then(
    //       (result) => {
    //         console.log(result);
    //       }
    //   );
  // exercise 1 increment age by one using $inc operator
  db.collection('Users').findOneAndUpdate({
    name: 'Luis'},
    {$inc: {
      age: 1}
    }, {
      returnOriginal: false
    }).then(
        (result) => {
          console.log(result);
        }
    );


  //db.close();
});
