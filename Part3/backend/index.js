const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'));
app.use(cors());
app.use(express.static('dist'));

morgan.token('body', (req, res) => JSON.stringify(req.body));

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

const generatePersonId = () => {
  const maxId = persons.length > 0
  ? Math.max(...persons.map( p => p.id ))
  : 0
  return maxId + 1;
}

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

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id);
  persons = persons.filter(person => person.id !== id);
  res.json(204).end();
});

app.post('/api/persons', (req, res) => {
  const person = req.body;

  if (!person.name) return res.status(400).json({
    error: 'Name missing'
  });

  const repiteName = persons.find(p => p.name === person.name);
  if (repiteName) return res.status(400).json({
    error: 'Name must be unique'
  })

  if (person.name === undefined || person.number === undefined) {
    return res.status(400).json({
      error: 'Name or number missing on body request'
    })
  }

  const newPerson = {
    name: person.name,
    number: person.number,
    id: generatePersonId()
  }
  persons.concat(newPerson);
  res.json(person);
})

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Backend Up! ✨🚀, listening on port: ${PORT}`);
});