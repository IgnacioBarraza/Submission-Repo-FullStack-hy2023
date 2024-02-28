const mongoose = require('mongoose');

if (process.argv.length<3) {
  console.log('give password as argument');
  process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://ignacio:${password}@fullstackopen-mongodb.9fg6ayz.mongodb.net/PhoneBookApp?retryWrites=true&w=majority&appName=fullStackOpen-mongoDB`;

mongoose.set('strictQuery',false);
mongoose.connect(url);

const personSchema = new mongoose.Schema({
  name: String,
  number: Number,
});

const Person = mongoose.model('Person', personSchema);

const addPerson = () => {
  const person = new Person({
    name: process.argv[3],
    number: process.argv[4],
  });
  person.save().then(result => {
    console.log(`New person {name: ${person.name}, number: ${person.number}} was saved successfully :D!`);
    mongoose.connection.close();
  });
};

const getData = () => {
  Person.find({}).then(result => {
    result.forEach( person => {
      console.log(person);
    });
    mongoose.connection.close();
  });
};

if (process.argv.length === 3) {
  console.log(process.argv.length);
  console.log('Getting data from database...');
  getData();
} else if (process.argv.length === 5) {
  console.log(process.argv.length);
  console.log('Adding new person to database');
  addPerson();
}
