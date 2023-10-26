import { useState ,useEffect} from 'react'
import Card from './components/Card'
import './App.css'
import ThemeBtn from './components/ThemeButton'
import { ThemeProvider } from './context/Theme'

function App() {
  const [themeMode,setThemeMode]=useState("light")

  const lightTheme=()=>setThemeMode("light")
  const darkTheme=()=>setThemeMode("dark")

  useEffect(()=>{
    document.querySelector('html').classList.remove("dark","light")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (
    <div className='p-4 m-4 bg-white'>
      <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn/>
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card/>
              </div>
            </div>
        </div>
      </ThemeProvider>
    </div>
  )
}

export default App
