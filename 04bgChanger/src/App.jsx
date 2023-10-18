import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setColor]=useState("white")

  return (
    <>
      <div className="container">
        <div className="mainScreen" style={{background:color}}></div>
        <div className="buttonGrp">
          <button className='button btn-red' onClick={()=>setColor("red")}>Red</button>
          <button className='button btn-green' onClick={()=>setColor("green")}>Green</button>
          <button className='button btn-blue' onClick={()=>setColor("blue")}>Blue</button>
          <button className="button btn-brown" onClick={()=>setColor("brown")}>Brown</button>
          <button className="button btn-olive" onClick={()=>setColor("olive")}>Olive</button>
        </div>
      </div>
    </>
  )
}

export default App
