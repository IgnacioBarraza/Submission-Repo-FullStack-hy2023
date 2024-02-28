require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const Person = require('./mongo_db/person');
const PORT = process.env.PORT;

app.use(express.json());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'));
app.use(cors());
app.use(express.static('dist'));

morgan.token('body', (req, res) => JSON.stringify(req.body));
mongoose.set('strictQuery',false);

app.get('/api/info', async (req, res) => {
  let num = await Person.countDocuments({}).then()
  console.log(num);
  res.send(
    `<h1>Phonebook info</h1>
    <br/>
    <h3>Phonebook backend has data for: ${num}</h3>
    <br/>
    <h3>Time for the request: ${Date()}</h3>
  `);
});

app.get('/api/persons', (req, res) => {
  Person.find({}).then( person => {
    res.json(person);
  })
});

app.get('/api/persons/:id', (req, res, next) => {
  const id = req.params.id;
  Person.findById(id)
        .then(person => {
          if (person) {
            res.json(person)
          } else {
            console.log('No person found by the id: ', id);
            res.status(404).end()
          }
        })
        .catch(error => next( error ))
});

app.delete('/api/persons/:id', (req, res, next) => {
  const id = req.params.id;
  Person.findByIdAndDelete(id)
        .then( result => {
          res.status(204).end();
        })
        .catch(error => next( error ))
});

app.post('/api/persons', (req, res) => {
  const body = req.body;
  if (body.name === undefined) return res.status(400).json({ error: 'Name missing' });
  const person = new Person({
    name: body.name, 
    number: body.number,
  });
  person.save().then( savedPerson => {
    res.json(savedPerson);
  });
});

app.put('/api/persons/:id', (req, res, next) => {
  const id = req.params.id;
  const body = req.body;
  const updatePerson = {
    name: body.name,
    number: body.number
  };
  Person.findByIdAndUpdate(id, updatePerson, {new: true})
        .then( updatedPerson => {
          res.json(updatedPerson)
        })
        .catch( error => next(error) )
});

const errorHandler = (error, req, res, next) => {
  console.error(error);
  if (error.name === 'CastError') return res.status(400).send({ error: 'Bad format for the id :/' });

  next(error);
};

app.use(errorHandler);

const invalidEndpoint = (req, res) => {
  return res.status(404).send({ error: 'this endpoint does not exist 🤔' });
}

app.use(invalidEndpoint);

app.listen(PORT, () => {
  console.log(`Backend Up! ✨🚀, listening on port: ${PORT}`);
});