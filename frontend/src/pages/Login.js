import React, { useState } from 'react'
import LoginImg from '../assets/images/docImg.jpg'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'

export const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const user = {email,password}
  const submitForm = async () => {
    try {
      const response = await axios.post("http://localhost:8000/user/login",user)
      const { token } = response.data
      console.log(token);
      localStorage.setItem('user', JSON.stringify({ token }));
      toast.success("Login Successful")
      setTimeout(()=>{
        window.location.reload()
      },100)
      navigate("/doctors")
    } catch (error) {
      toast.error("Login Failed")
    }
  } 

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row items-center">
        <div className="order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32">
          <div className="space-y-8">
              <form onSubmit={(e)=>e.preventDefault()}>
            <h3 className="font-bold text-lg text-blue-500">Hello!</h3>
            <div className="mt-4 space-y-2 py-1">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 border rounded-md outline-none"
                target={email}
                onChange={(e)=>setEmail(e.target.value)}
                required              
                />
              <br />
            </div>
            <div className="mt-4 space-y-2 py-1">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 border rounded-md outline-none"
                target={password}
                onChange={(e)=>setPassword(e.target.value)}
                required 
              />
              <br />
            </div>
            <div className="flex justify-around mt-4">
              <button
                type="submit"
                onClick={submitForm}
                className="bg-slate-700 text-white rounded-md px-3 py-1"
              >
                Login
              </button>
              <p>
                Not registered?
                <Link to="/signup" className="underline text-blue-500 cursor-pointer">
                  Signup
                </Link>
              </p>
            </div>
          </form>  
        </div>
      </div>
        <div className="mt-28 order-1 w-full md:w-1/2 flex justify-center md:justify-end">
          <img src={LoginImg} className="w-50 h-95 mt-12 rounded-md" alt="Login" />
        </div>
      </div>
    </>
  )
}
