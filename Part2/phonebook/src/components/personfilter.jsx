export const PersonList = ({ filteredPersons }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {filteredPersons.map(person => {
        return <span key={person.id}>{person.name} - {person.number}</span>
      })}
    </div>
  );
}