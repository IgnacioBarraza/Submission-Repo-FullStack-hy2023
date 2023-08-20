// import React from 'react';

const Header = (data) => {
  return (
    <div>
      <h1>{data.course}</h1>
    </div>
  )
}

const Content = ({data}) => {
  return (
    <div>
      <p>{data[0].part1} {data[0].exercises1}</p>
      <p>{data[1].part2} {data[1].exercises2}</p>
      <p>{data[2].part3} {data[2].exercises3}</p>
    </div>
  )
}

const Total = ({data}) => {
  return (
    <div>
      <p>Number of exercises {data[0].exercises1 + data[1].exercises2 + data[2].exercises3}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development';
  const exercises = [
    {part1: 'Fundamentals of React', exercises1: 10},
    {part2: 'Using props to pass data', exercises2: 7},
    {part3: 'State of a component', exercises3: 14}
  ];
  return (
    <>
      <Header data={course}/>
      <Content data={exercises}/>
      <Total data={exercises}/>
    </>
  )
}

export default App
