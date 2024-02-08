export const Message = ({ msg }) => {
  if (msg === null) return null;
  return (
    <>
      <div>
        <span>{msg}</span>
      </div>
    </>
  )
}