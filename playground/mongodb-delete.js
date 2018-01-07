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

//deleteMany
// db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
//   console.log(result);
// });

//deleteOne
// db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
//   console.log(result);
// });

//findOneAndDelete
// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
//   console.log(result);
// });

//Challenge do the same with Users
// db.collection('Users').deleteMany({text: 'David Mitchell'}).then((result) => {
//   console.log(result);
// });

db.collection('Users').findOneAndDelete({
  _id: new ObjectID('5a51a4ae4d946322f4f4bdfa')
}).then((result) => {
  console.log(result);
});
  // db.close();

});
