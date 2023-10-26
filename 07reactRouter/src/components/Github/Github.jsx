import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data,setData]=useState({})
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/rishabacharya')
    //     .then((res)=>res.json())
    //     .then(data=>{
    //         setData(data)
    //     })
    // },[])
    const data=useLoaderData()

  return (
    <>
        <div className='text-center bg-gray-600 m-4 p-4 text-3xl'>
            Github followers count: {data.followers}
            <div className='flex justify-center m-5 p-2'>
                <img alt="Github profile picture" width={300} src={data.avatar_url}></img>
            </div>
        </div>
    </>
  )
}

export default Github

export const apiCall= async ()=>{
    const res=await fetch('https://api.github.com/users/rishabacharya')
    const hello=res.json()
    return hello;
}