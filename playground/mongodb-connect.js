//Steps
//Install mongodb (npm install mongodb)

//const MongoClient = require('mongodb').MongoClient;

//1. Create a MongoClient object and connect to your database
const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to mongodb server.');
  }
  console.log('Connected to mongodb server.')

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert Todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  db.collection('Users').insertOne({
  
    text: 'David Mitchell',
    age: 38
  }, (err, result) => {
    if(err) {
      return console.log('Unable to insert new User', err);
    }

    console.log(result.ops[0]._id.getTimestamp());
  });

  db.close();

});
