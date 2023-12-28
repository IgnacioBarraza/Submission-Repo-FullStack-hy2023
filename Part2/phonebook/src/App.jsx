/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'

function App() {
  const [persons, setPersons] = useState([
    {name: 'Arthur King'}
  ])
  const [newName, setNewName] = useState('')

  const onSubmit = (event) => {
    event.preventDefault();
    if (newName === '') return;
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      setNewName('')
      return;
    } 
    // Add person to state array
    setPersons([...persons, {name: newName}]);
    setNewName(''); // clear the input field after adding a new person
  }

  return (
    <>
      <div>
        <h2>Phonebook list</h2>
        <form onSubmit={onSubmit}>
          <label htmlFor="name">Name: </label>
          <input type='text' value={newName} onChange={(e) => setNewName(e.target.value)} id='name'/>
          <button type='submit'>Add person</button>
        </form>
        <h2>Numbers</h2>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {persons.map((person)  => {
            return <span key={person}>{person.name}</span>
          })}
        </div>
      </div>
    </>
  )
}

export default App
