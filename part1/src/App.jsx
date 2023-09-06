import { useState } from "react"

const Button = ({handleFeedback, text}) => <button onClick={handleFeedback}>{text}</button>

const Display = ({text, count}) => <div>{text} {count}</div>

const App = () => {

  const [ good, setGood ] = useState(0);
  const [ neutral, setNeutral ] = useState(0);
  const [ bad, setBad ] = useState(0);
  const [ total, setTotal] = useState(0);
  const [ average, setAverage] = useState(0)
  const [ positive, setPositive] = useState(0)

  const incrementGood = () => {
    const updatedGood = good + 1;
    const updatedTotal = updatedGood + neutral + bad;
    setGood(updatedGood);
    setTotal(updatedTotal);
    setAverage(updatedGood/updatedTotal);
    setPositive((updatedGood/updatedTotal) * 100);
  };
  const incrementNeutral = () => {
    const updatedNeutral = neutral + 1;
    const updatedTotal = good + updatedNeutral + bad;
    setNeutral(updatedNeutral)
    setTotal(updatedTotal);
    setAverage(updatedNeutral/updatedTotal);
  };
  const incrementBad = () => {
    const updatedBad =  bad + 1;
    const updatedTotal = good + neutral + updatedBad
    setBad(updatedBad)
    setTotal(updatedTotal);
    setAverage(updatedBad/updatedTotal);
  };

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
        <Display text='All' count={total}/>
        <Display text='Average' count={average}/>
        <Display text='Positive' count={positive}/>
      </div>
    </>
  )
}

export default App
