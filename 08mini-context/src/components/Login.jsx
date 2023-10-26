import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext';

function Login() {
    const {setUser}=useContext(UserContext);
    const [username,setUserName]=useState("")
    const [password,setPassword]=useState("")
    const handleSubmit=(e)=>{
        e.preventDefault();
        setUser({username,password})
    }
  return (
    <div>
        <h3>Login Page</h3>
        <input type='text' value={username} onChange={(e)=>setUserName(e.target.value)}/>
        <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={handleSubmit}>Log in</button>
    </div>
  )
}

export default Login