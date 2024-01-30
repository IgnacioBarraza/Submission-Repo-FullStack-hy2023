/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import './App.css'
import { Filter } from './components/filter';
import { AddPersonForm } from './components/personform';
import { PersonList } from './components/personfilter';
import { Notification } from "./components/message";
import jsonService from './service/jsonService';

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [message, setMessage] = useState(null);

  const onSubmit = (event) => {
    event.preventDefault();
    if (newName === '' || newNumber === '') {
      alert('Name and number are required');
      return;
    }
    const existingPerson = persons.find((person) => person.name === newName);
    if (existingPerson) {
      const isToUpdate = window.confirm(`${newName} is already added to phonebook, do you want to update the number?`);
      if (isToUpdate) {
        const updatePerson = {
          name: newName,
          number: newNumber,
        }
        jsonService.updateNote(existingPerson.id, updatePerson).then(res => {
          if (res.status === 200) {
            setMessage(`${newPerson.name} updated successfully`);
            getPersons();
          }
        });
        setTimeout(() => {
          setMessage(null);
        }, 5000)
        setNewName('');
        setNewNumber('');
        return;
      }
      alert(`${newName} is already added to phonebook and not would be updated`);
      setNewName('');
      setNewNumber("");
      return;
    } 
    // Add person to state array
    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons[persons.length - 1]?.id + 1 
    }
    jsonService.createNote(newPerson).then(res => {
      if (res.status === 201) {
        setMessage(`${newPerson.name} added successfully`);
      }
    });
    setTimeout(() => {
      setMessage(null);
    }, 5000)
    getPersons();
    setNewName("");
    setNewNumber("");
  }

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const deletePerson = (event) => {
    if (window.confirm(`Are you sure you want to delete ${event.name}`)) {
      jsonService.deleteNote(event.id).then(res => {
        if (res.status === 200) {
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
        <Notification message={message}></Notification>
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
