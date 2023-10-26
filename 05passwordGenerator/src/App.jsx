import { useCallback, useEffect, useState ,useRef} from 'react'
import './App.css'

function App() {
  const [length,setLength]=useState(8);
  const [numbersAllowed,setNumbersAllowed]=useState(false);
  const [charactersAllowed,setCharactersAllowed]=useState(false);
  const [password,setPassword]=useState("")
  const [copyBtnText,setCopyBtnText]=useState("copy")
  const [backgroundColor,setBackgroundColor]=useState("#02aaf5")

  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numbersAllowed) {str=str+"1234567890"}
    if(charactersAllowed) {
      str+="!`~!@#$%^&*_+=-\|:;/?.>,<"
    }

    for(let i=1;i<=length;i++){
      let charIndex=Math.floor(Math.random()*str.length+1);
      pass+=str.charAt(charIndex);
    }
    setPassword(pass);
    
    setBackgroundColor("#02aaf5");
    setCopyBtnText("copy")
  },[length,numbersAllowed,charactersAllowed,setPassword])

  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select();//Sometimes value might not be present so we used optional select
    // passwordRef.current?.setSelectionRange(0,7); //Use this with passwordRef.current?.select to select specific values
    window.navigator.clipboard.writeText(password)
    setBackgroundColor("#0076ab");
    setCopyBtnText("copied")
    
  },[password])

  useEffect(()=>{
      passwordGenerator()
    },
    [length,numbersAllowed,charactersAllowed,passwordGenerator])

  //useRef hook
  const passwordRef=useRef(null);


  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-2 py-2 my-8 text-orange-500 bg-gray-800'>
      <div className='text-4xl text-center mb-2'>Password Generator</div>
        <div className='flex shadow overflow-hidden rounded-lg mb-4'>
          <input type='text' value={password} className='mr-2 outline-none w-full py-1 px-3 rounded-md'
          placeholder='password'
          ref={passwordRef}
          readOnly
          />
          <button 
            className='copyButton rounded-md justify-center text-white font-bold px-2 bg-sky-500 pb-1' 
            onClick={copyPasswordToClipboard}
            style={{background:backgroundColor}}
            >
              {copyBtnText}
            </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input onChange={(e)=>setLength(e.target.value)} type="range" min={8} max={40} value={length} className='cursor-pointer' />
            <label> Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input onChange={(e)=>setNumbersAllowed((prev)=>!prev)} type="checkbox" value={numbersAllowed} />
            <label htmlFor='Number Input'>Numbers</label>
            <input  onChange={(e)=>setCharactersAllowed((prev)=>!prev)} type="checkbox" value={numbersAllowed} />
            <label htmlFor='Character input'> Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
