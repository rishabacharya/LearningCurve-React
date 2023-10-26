import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user}=useContext(UserContext)
    if(!user) return(<h3>Please Login</h3>)
  return (
    <div>Hello, {user?.username || "please login"}</div>
  )
}

export default Profile