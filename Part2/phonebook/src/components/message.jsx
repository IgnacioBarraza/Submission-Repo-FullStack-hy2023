import './message.css'

export const Notification = ({message}) => {
  if (message === null) {
    return null
  }
  if (message.toLowerCase().includes('successfully')) {
    return (
      <>
        <div className="message success">
          <span className='success-text'>{ message }</span>
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className="message error">
          <span>{ message }</span>
        </div>
      </>
    )
  }
}