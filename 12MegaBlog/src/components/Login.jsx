import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {useForm} from 'react-hook-form'
import authService from './../appwrite/auth_service'
import {login as authLogin} from './../store/authSlice'
import {Logo,Button,Input} from './index'
import { useNavigate ,Link} from 'react-router-dom'


function Login() {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const {register,handleSubmit}=useForm()
    const [error,setError]=useState("")
    const login=async ()=>{
        setError("")
        try{
            const session=await authService.login(data)
            if(session){
                const userData=await authService.getCurrentUser()
                if(userData){
                    dispatch(authLogin(userData))
                }
                navigate("/")
            }
        }catch(e){
            setError(e)
        }
    }


  return (
    <div className='flex items-center justify-center w-full'>
        <div className="mx-auto p-10 border border-black rounded-xl bg-gray-100 max-w-lg mx-auto">
            <div className="mb-2 flex justify-center">
                <span className="inline-block w-full max-w-[100px]">
                    <Logo/>
                </span>
            </div>
        </div> 
        <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
        <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(login)} className='mt-8'>
            <div className='space-y-5'>
                <Input
                    label="Email"
                    type="email"
                    placeholder="Enter your email"
                    // ...regsiter is used to spread register we got from useHookForm
                    {...register("email",{
                        required:true,
                        validate:{
                            matchPattern: value=>/^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/.test(value) || "Email address must be valid email address"
                        }
                    })}
                />

                <Input
                    label="Password"
                    type="password"
                    placeholder="Enter your password"
                    {...register("password",{
                        required:true
                    })}
                />

                <Button type="submit" className="w-full">Log in</Button>

            </div>
        </form>
    </div>
  )
}

export default Login