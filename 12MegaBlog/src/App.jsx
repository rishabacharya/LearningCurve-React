import './App.css'
import { useState,useEffect } from 'react'
import {useDispatch} from "react-redux"
import authService from './appwrite/auth_service'
import { login, logout } from './store/authSlice'
import {Header,Footer} from './components'
import {Outlet} from 'react-router-dom'
import { Account, Client } from 'appwrite'
import conf from './conf/conf'


function App() {
  const [loading,setLoading] =useState(true)
  const dispatch=useDispatch()
  useEffect(()=>{
    authService.getCurrentUser()
    .then(
      userData=>{
        console.log(userData);
        if(userData){
          dispatch(login({userData}))
        }
        else{
          dispatch(logout())
        }
      }
    )
    .catch(e=>{
      console.log(e)
    })
    .finally(
      setLoading(false)
    );
  },[])
  
            

  return loading? (<><div>Loading ...</div></>):(
    <div className='min-h-full bg-gray-400  '>
      <div className="w-full block flex flex-col justify-center items-center">
        <Header/>
        <main>
          <Outlet/>
        </main>
        <Footer/>
      </div>
    </div>  
  )
}

export default App
