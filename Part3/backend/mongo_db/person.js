const mongoose = require('mongoose');
mongoose.set('strictQuery',false);

const url = process.env.MONGO_URL;
console.log('Connecting to mongo url: ' + url);

mongoose.connect(url)
        .then( res => {
          console.log('Connection with mongoDB was successfully! :D', '🌿');
        })
        .catch( error => {
          console.error('An error occurs when trying to connect to mongoDB :(', error);
        })

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
    required: true
  },
  number: Number,
})

personSchema.set('toJSON', {
  transform: (document, returned) => {
    returned.id = returned._id.toString()
    delete returned._id
    delete returned.__v
  }
})

module.exports = mongoose.model('Person', personSchema);