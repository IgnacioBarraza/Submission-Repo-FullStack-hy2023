import './message.css'

export const Notification = ({message}) => {
  if (message === null) {
    return null
  }
  if (message.toLowerCase().includes('successfully')) {
    return (
      <>
        <div className="message success">
          <span className='message-text'>{ message }</span>
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className="message error">
          <span className='message-text'>{ message }</span>
        </div>
      </>
    )
  }
}