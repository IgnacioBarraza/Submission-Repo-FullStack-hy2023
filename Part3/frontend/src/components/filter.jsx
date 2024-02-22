
export const Filter = ({ searchTerm, setSearchTerm }) => {
  return (
    <label>
      Search by Name:
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </label>
  );
}