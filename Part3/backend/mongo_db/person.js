const mongoose = require('mongoose');
const logger = require('../utils/logger');
mongoose.set('strictQuery',false);

const url = process.env.MONGO_URL;
logger.info('Connecting to mongo url: ' + url);

mongoose.connect(url)
        .then( res => {
          logger.info('Connection with mongoDB was successfully! :D', '🌿');
        })
        .catch( error => {
          logger.error('An error occurs when trying to connect to mongoDB :(', error);
        });

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
    required: true
  },
  number: {
    type: String,
    minLength: 8,
    validate: {
      validator: function(v) {
        return /^\d{2,3}-\d{7,8}$/.test(v);
      },
      message: props => `${props.value} is not a valid phone number`
    },
    required: true
  },
});

personSchema.set('toJSON', {
  transform: (document, returned) => {
    returned.id = returned._id.toString();
    delete returned._id;
    delete returned.__v;
  }
});

module.exports = mongoose.model('Person', personSchema);