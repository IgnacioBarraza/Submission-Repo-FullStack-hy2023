const express = require('express');
const app = express();

let persons = [
  { 
    "id": 1,
    "name": "Arto Hellas", 
    "number": "040-123456"
  },
  { 
    "id": 2,
    "name": "Ada Lovelace", 
    "number": "39-44-5323523"
  },
  { 
    "id": 3,
    "name": "Dan Abramov", 
    "number": "12-43-234345"
  },
  { 
    "id": 4,
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122"
  }
]

app.get('/api/info', (req, res) => {
  const num = persons.length
  res.send(`<span>Phonebook has info for ${num} persons</span><br /> ${Date()}`);
});

app.get('/api/persons', (req, res) => {
  res.json(persons);
});

app.get('/api/persons/:id', (req, res) => {
  const id = req.params.id;
  const person = persons.find(person => person.id === Number(id));
  if (person) {
    res.json(person)
  } else {
    res.status(404).end();
  }
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Backend Up! ✨🚀, listening on port: ${PORT}`);
});