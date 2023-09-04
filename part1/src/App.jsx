import { useState } from "react"

const Button = ({handleFeedback, text}) => <button onClick={handleFeedback}>{text}</button>

const Display = ({text, count}) => <div>{text} {count}</div>

const App = () => {

  const [ good, setGood ] = useState(0);
  const [ neutral, setNeutral ] = useState(0);
  const [ bad, setBad ] = useState(0);

  const incrementGood = () => setGood(good + 1);
  const incrementNeutral = () => setNeutral(neutral + 1);
  const incrementBad = () => setBad(bad + 1);

  return (
    <>
      <div>
        <h1>Give feedback</h1>
        <Button handleFeedback={incrementGood}  text='good'/>
        <Button handleFeedback={incrementNeutral}  text='neutral'/>
        <Button handleFeedback={incrementBad}  text='bad'/>
        <h1>Statistics</h1>
        <Display text='good' count={good}/>
        <Display text='neutral' count={neutral}/>
        <Display text='bad' count={bad}/>
      </div>
    </>
  )
}

export default App
