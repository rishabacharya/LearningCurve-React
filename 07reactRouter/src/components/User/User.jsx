import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userId}=useParams()
  return (
    <div className='bg-gray-500 text-white flex flex-row justify-center text-3xl'>User with id: {userId}</div>
  )
}

export default User