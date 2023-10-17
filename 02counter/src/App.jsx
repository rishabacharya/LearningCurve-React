import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter,setCounter]=useState(0);
  // let counter = 5;

  function logger(message){
    console.log(message)
  }

  const addValue=()=>{
    counter<20?setCounter(counter+1):logger('value capped at 20');
  }

  const decreaseValue=()=>{counter>0?setCounter(counter-1):logger('value capped at 0')}

  return (
    <>
      <h1>Chai aur react tutorial</h1>
      <h2>It is possible for you now to count from 0 to 20</h2>
      <h3>Counter value : {counter} +2 is {counter+2}</h3>
      <button onClick={addValue}>Add Value</button>
      <br/>
      <button onClick={decreaseValue}>Remove Value</button>
    </>
  )
}

export default App
