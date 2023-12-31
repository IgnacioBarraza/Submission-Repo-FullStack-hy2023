/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import './App.css'
import { Filter } from './components/filter';
import { AddPersonForm } from './components/personform';
import { PersonList } from './components/personfilter';
import axios from 'axios'

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
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
    // clear the input field after adding a new person
    setNewName('');
    setNewNumber('');
  }

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    axios.get('http://localhost:3001/persons').then(response => {
      setPersons(response.data);
    })
  }, []);

  return (
    <>
      <div>
        <h2>Phonebook list</h2>
        <Filter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <h2>Add a new</h2>
        <AddPersonForm
          newName={newName}
          setNewName={setNewName}
          newNumber={newNumber}
          setNewNumber={setNewNumber}
          onSubmit={onSubmit}
        />
        <h2>Numbers</h2>
        <PersonList filteredPersons={filteredPersons} />
      </div>
    </>
  )
}

export default App
