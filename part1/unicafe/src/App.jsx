import { useState } from "react"

const Button = ({handleFeedback, name}) => <button onClick={handleFeedback}>{name}</button>;

const StatisticsLine = ({name, parts}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{parts}</td>
    </tr>
  )
};

const Statistics = ({name, parts}) => {

  if (parts[3].value === 0) {
    return (
      <>
        <div>
          <h1>{name}</h1>
          No feedback given.
        </div>
      </>
    )
  }

  return (
    <>
      <div>
        <h1>{name}</h1>
        <table>
          <tbody>
            <StatisticsLine name={parts[0].name} parts={parts[0].value} />
            <StatisticsLine name={parts[1].name} parts={parts[1].value} />
            <StatisticsLine name={parts[2].name} parts={parts[2].value} />
            <StatisticsLine name={parts[3].name} parts={parts[3].value} />
            <StatisticsLine name={parts[4].name} parts={parts[4].value} />
            <StatisticsLine name={parts[5].name} parts={parts[5].value} />
          </tbody>
        </table>
      </div>
    </>
  );
};


const App = () => {

  const [ good, setGood ] = useState(0);
  const [ neutral, setNeutral ] = useState(0);
  const [ bad, setBad ] = useState(0);
  const total = good + neutral + bad;
  const average = (good * 1 +  neutral * 0 + bad * -1)/total;
  const positive = (good * 100)/total + "%";

  const stats = {
    name: "statistics",
    parts: [
      {
        name: "good",
        value: good
      },
      {
        name: "neutral",
        value: neutral
      },
      {
        name: "bad",
        value: bad
      },
      {
        name: "all",
        value: total
      },
      {
        name: "average",
        value: average
      },
      {
        name: "positive",
        value: positive
      }
    ]
  }

  return (
    <>
      <div>
        <h1>Give feedback</h1>
        <Button handleFeedback={() => setGood(good + 1)}  name='good'/>
        <Button handleFeedback={() => setNeutral(neutral + 1)}  name='neutral'/>
        <Button handleFeedback={() => setBad(bad + 1)}  name='bad'/>
        <Statistics name={stats.name} parts={stats.parts}/>
      </div>
    </>
  )
}

export default App;