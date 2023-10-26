import { useCallback, useState,useEffect } from 'react'
import './App.css'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount,setAmount]=useState(0)
  const [from ,setFrom]=useState("usd")
  const [convertedAmount,setConvertedAmount]=useState(0)
  const [to,setTo]=useState("npr")
  const data=useCurrencyInfo(from)
  const currencyOptions=Object.keys(data)

  const convertAmount=useCallback(()=>{
    const convAmount=amount*data[to]
    setConvertedAmount(convAmount)
  },[amount,data,from,to,setConvertedAmount])


  const swap=()=>{
    setTo(from)
    setFrom(to)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  useEffect(()=>{convertAmount()},[amount,data,from,to,convertAmount])
  
  return (
    <>
    <div className='container'>
    
      <p className='font-semibold text-black mb-2'>
          Change value in input box labeled From to get converted currency
        </p>
        <InputBox label="From" onAmountChange={setAmount}
          
          amount={amount}
          onCurrencyChange={(e)=>setFrom(e)}
          selectCurrency={from}
          currencyOption={currencyOptions}/>
        
        <button className="text-white font-bold rounded-md swapButton" onClick={swap}>swap</button>
        
        <InputBox 
          label="To" 
          onCurrencyChange={setTo}
          amountDisabled={true}
          amount={convertedAmount} 
          selectCurrency={to} 
          currencyOption={currencyOptions}
          />
      
    </div></>
  )
}

export default App
