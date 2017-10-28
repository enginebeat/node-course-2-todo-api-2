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

  //deleteMany
  // as advertised it will delete one or all the entries with match the query.
  // specially interesting is the top of the CommandResult object which
  // will give you the result object: result: { n: 1, ok: 1 }
  // db.collection('Todos').deleteMany({text: 'eat breakfast'}).then(
  //   (result) => {
  //     console.log(result);
  //   }
  // );

  // deleteOne
  // same as deleteMany but will delete only the first entry with
  //the given query criteria.
  // db.collection('Todos').deleteOne({text: 'eat lunch'}).then(
  //   (result) => {
  //     console.log(result);
  //   }
  // );

  // findAndDelete
  // this method is very handy as it not only deletes the entry matching
  // the query criteria but also returns the document.
  // this is obviously handy. if you delete an entry by mistake you can
  // offer the possibility of cancelling the deletion and insert the document
  // back into the collection.
  //db.collection('Todos').findOneAndDelete({completed: 'true'}).then(
  //   (result) => {
  //     console.log(result);
  //   }
  // );

  // exercises
  // using findOneAndDelete
  // db.collection('Users').findOneAndDelete({_id: new ObjectID("59eee6bc82021b194c53509c")}).then(
  //   (result) => {
  //     console.log(JSON.stringify(result, undefined, 2);
  //   }
  // );

  // using deleteMany
  db.collection('Users').deleteMany({name: 'Luis A'}).then(
    (result) => {
      console.log(result);
    }
  );




  //db.close();
});
