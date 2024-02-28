export const AddPersonForm = ({ newName, setNewName, newNumber, setNewNumber, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="name">Name: </label>
      <input type='text' value={newName} onChange={(e) => setNewName(e.target.value)} id='name'/>
      <label htmlFor='number'>Number: </label>
      <input type='text' value={newNumber} onChange={(e) => setNewNumber(e.target.value)} id='number' />
      <button type='submit'>Add person</button>
    </form>
  );
}