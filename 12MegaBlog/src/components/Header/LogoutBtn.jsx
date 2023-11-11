import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/authSlice'
import authService from './../../appwrite/auth_service'


function LogoutBtn() {
  const logoutHandler=()=>{
    authService.logout().then(()=>{
      logout()
    })
  }
  return (
    <button onClick={logoutHandler} className='px-6 py-2 inline-block rounded-full hover:bg-blue-400 duration-200'>
      Logout
    </button>
  )
}

export default LogoutBtn