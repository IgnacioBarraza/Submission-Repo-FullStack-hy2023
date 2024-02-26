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

app.get('/api/info', (req, res) => {
  res.send('<h1> Holanda que talca como andamio</h1>');
});

app.get('/api/persons', (req, res) => {
  Person.find({}).then( person => {
    res.json(person);
  })
});

// app.get('/api/persons/:id', (req, res) => {
//   const id = req.params.id;
//   Person.findById(id).then(person => {
//     res.json(person);
//   })
// });

// app.delete('/api/persons/:id', (req, res) => {
//   const id = Number(req.params.id);
//   persons = persons.filter(person => person.id !== id);
//   res.json(204).end();
// });

// app.post('/api/persons', (req, res) => {
//   const body = req.body;

//   if (body.name === undefined) return res.status(400).json({
//     error: 'Name missing'
//   });

//   const person = new Person({
//     name: body.name, 
//     number: body.number,
//   })

//   person.save().then( savedPerson => {
//     res.json(savedPerson);
//   })
// })

app.listen(PORT, () => {
  console.log(`Backend Up! ✨🚀, listening on port: ${PORT}`);
});