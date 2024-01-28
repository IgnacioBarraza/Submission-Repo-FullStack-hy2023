/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import './App.css'
import { Filter } from './components/filter';
import { AddPersonForm } from './components/personform';
import { PersonList } from './components/personfilter';
import jsonService from './service/jsonService';

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
    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons[persons.length - 1].id + 1 
    }
    jsonService.createNote(newPerson);
    setPersons(persons.concat(newPerson));
    setNewName("");
    setNewNumber("");
  }

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const deletePerson = (event) => {
    if (window.confirm(`Are you sure you want to delete ${event.name}`)) {
      console.log(event.id);
      jsonService.deleteNote(event.id).then(res => {
        if (res.status === 200) {
          console.log(res);
          getPersons()
        }
      })
    }
  }

  const getPersons = () => {
    jsonService.getAll().then( res => {
      setPersons(res.data);
    })
  }

  useEffect(() => {
    getPersons()
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
        <PersonList filteredPersons={filteredPersons} deletePerson={deletePerson} />
      </div>
    </>
  )
}

export default App
