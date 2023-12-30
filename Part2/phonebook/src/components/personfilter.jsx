export const PersonList = ({ filteredPersons }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {filteredPersons.map((person, index) => {
        return <span key={index}>{person.name} - {person.number}</span>
      })}
    </div>
  );
}