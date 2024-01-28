export const PersonList = ({ filteredPersons, deletePerson }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
      {filteredPersons.map(person => {
        return (
          <>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '8px'}}>
            <span key={person.id}>{person.name} - {person.number}</span>
            <button onClick={() => deletePerson(person)}>delete</button>
          </div>
          </>
        )
      })}
    </div>
  );
}