import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/CardOne'
import CardTwo from './components/CardTwo'

function App() {
  const [count, setCount] = useState(0)
  let nums=[0,1,2,3]

  return (
    <>
      <h1 className='bg-green-400 mb-4'>Tailwind css</h1>
      {/* <Card username="Rishab" numbers={nums}/>
      <Card username="Rishab" numbers={nums}/> */}
      {/* <Card username="Anjali"></Card> */}
      <CardTwo username="Ritisha" btnText='Click me'/>
      <CardTwo username="Ritisha"/>
    </>
  )
}

export default App
