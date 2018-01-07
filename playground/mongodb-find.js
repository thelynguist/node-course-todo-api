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



//   db.collection('Todos').find({
//     _id: new ObjectID('5a519ddb1b6dc906a8f5be4b')
//   }).toArray().then((docs) => {
// console.log('Todos');
// console.log(JSON.stringify(docs, undefined, 2));
//   }, (err) => {
//     console.log('Unable to fetch todos', err);
//   });

// db.collection('Todos').find().count().then((count) => {
// console.log(`Todos count: ${count}`);
// }, (err) => {
//   console.log('Unable to fetch todos', err);
// });

db.collection('Users').find({text: 'David'}).toArray().then((docs) => {
  console.log(JSON.stringify(docs, undefined, 2));
}, (err) => {
  console.log('Unable to find that dude.', err);
});

  // db.close();

});
