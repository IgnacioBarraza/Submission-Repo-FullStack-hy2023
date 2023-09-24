import { useState } from 'react';

const Button = ({handleClick, name}) => {
  return (
    <>
      <button onClick={handleClick}>
        {name}
      </button>
    </>
  )
}

const App = () => {
  const [selected, setSelected] = useState(0);
  const [point, setPoint] = useState(Array(8).fill(0));
  const [votes, setVotes] = useState([0, 0])

  const random = () => {
    let random = Math.floor(Math.random() * anecdotes.length);
    setSelected(random);
  }

  const points = () => {
    const copyPoints = [...point];
    copyPoints[selected] += 1;
    setPoint(copyPoints);
    if (copyPoints[selected] > votes[1]) {
      const copyVotes = [...votes];
      copyVotes[0] = selected;
      copyVotes[1] = copyPoints[selected];
      setVotes(copyVotes)
    }
  }

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  return (
    <>
      <div>
        <h1>Anecdote of the day</h1>
        <span>{anecdotes[selected]}</span>
        <br />
        <span>the anecdote has {point[selected]} points</span>
      </div>
      <Button handleClick={points} name="vote"/>
      <Button handleClick={random} name="next anecdote"/>
      <div>
        <h2>Anecdote with most votes</h2>
        <span>{anecdotes[votes[0]]}</span>
        <br />
        <span>the anecdote has {votes[1]} votes</span>
      </div>
    </>
  )
}

export default App
