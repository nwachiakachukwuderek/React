import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { use } from 'react'

function App() {
  // when using useState, you insert something in the array. the variable name and method or function 
  // in the useState the pathernthesis is the initial value of the variable or you need to pass in a value to start from

  let [counter, setCounter] = useState(15)
  // let counter = 15;

  const addValue = () => {
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  }

  const removeValue = () => {
    counter = counter -1
    setCounter(counter)
    // setCounter(counter - 1);
  }

  return (
    <>
    {/* this is know as variable injection {counter}*/}
      <h1> React course with hitesh {counter} </h1>
      <h2>Counter value: {counter}</h2>
      <button
      onClick={addValue}
      >Add Value</button> {" "}
      <button 
      onClick={removeValue}
      >Remove value</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
