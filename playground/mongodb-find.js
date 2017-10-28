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
// to get all the documents use .find() with no params
//find returns only a cursor that points to the entry found so you need to
// use it's method .toArray() to get all the docs found into an array of docs.
// .toArray returns a promiss.
  db.collection('Todos').find().toArray().then(
    // if the promise is resolved an array, docs, will be returned
    (docs) => {
      console.log('Todos');
      console.log(JSON.stringify(docs, undefined, 2));
    },
    // if the promise is rejected an error will be returned
    (err) => {
      console.log('Unable to fetch todos', err);
    }
  );

  // To get all documents that fufill some parameter then use
  // .find({name:value pair})
  // presumably you will be able to groupe several by separating them
  // with commas.
  db.collection('Todos').find({completed: true}).toArray().then(
    (docs) => {
      console.log('Todos');
      console.log(JSON.stringify(docs, undefined, 2));
    },
    (err) => {
      console.log('Unable to fetch todos', err);
    }
  );

  // getting a document by id
  // the _id you get is not a string is an ObjectID so you can't just
  // get the id and pass it in to _id on the .find method, you need to create
  // a new object and pass it the string
  db.collection('Todos').find({
    _id: new ObjectID('59eee355ff4f2e3ad45d4226') }).toArray().then(
    (docs) => {
      console.log('Todos');
      console.log(JSON.stringify(docs, undefined, 2));
    },
    (err) => {
      console.log('Unable to fetch todos', err);
    }
  );

  // To get how many documents are in a collection use the .count method of
  // .find.
  // again you can also find by parameters as above.
  db.collection('Todos').find().count().then(
    (count) => {
      console.log(`Todos count: ${count}`);
    },
    (err) => {
    console.log('Unable to fetch todos', err);
    }
  );

  // Exercise
  db.collection('Users').find({name: 'Luis A'}).count().then(
    (count) => {
      console.log(`Todos count: ${count}`);
    },
    (err) => {
      console.log('Unable to fetch Users', err);
    }
  );

  //exercise 1
  db.collection('Users').find({name: 'Luis A'}).toArray().then(
    (docs) => {
      console.log(JSON.stringify(docs, undefined, 2));
    },
    (err) => {
      console.log('Unable to fetch Users', err);
    }
  );

  //db.close();
});
