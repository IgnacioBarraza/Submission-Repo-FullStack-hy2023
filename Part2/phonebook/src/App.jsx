/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'

function App() {
  const [persons, setPersons] = useState([
    {
      name: 'Arthur King',
      number: 56968838945
    },
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  
  const [searchTerm, setSearchTerm] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    if (newName === '' || newNumber === '') {
      alert('Name and number are required');
      return;
    }
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      setNewName('')
      return;
    } 
    // Add person to state array
    setPersons([...persons, {name: newName, number: newNumber}]);
    setNewName(''); // clear the input field after adding a new person
    setNewNumber('');
  }

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div>
        <h2>Phonebook list</h2>
        <label>
        Search by Name:
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </label>
        <h2>Add a new</h2>
        <form onSubmit={onSubmit}>
          <label htmlFor="name">Name: </label>
          <input type='text' value={newName} onChange={(e) => setNewName(e.target.value)} id='name'/>
          <label htmlFor='number'>Number: </label>
          <input type='number' value={newNumber} onChange={(e) => setNewNumber(e.target.value)} id='number' />
          <button type='submit'>Add person</button>
        </form>
        <h2>Numbers</h2>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {filteredPersons.map((person)  => {
            return <span key={person}>{person.name} - {person.number}</span>
          })}
        </div>
      </div>
    </>
  )
}

export default App
