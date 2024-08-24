import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'
const Navbar = () => {

  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    const user = localStorage.getItem('user')
    if (user) {
      setLoggedIn(true)
    }
  })

  const Logout = () => {
    localStorage.removeItem('user')
    setLoggedIn(false)
    toast.success("Logged out")
  }

  const links = (
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/doctors">Doctors</Link></li>
      <li><Link to="/appointments">Appointments</Link></li>
      <li><a href="">Contact</a></li>
    </>
  )

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-20'>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                {links}
              </ul>
            </div>
            <a href='/' className="btn text-xl">Hospital</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {links}
            </ul>
          </div>
          <div className="navbar-end">
          {loggedIn ? (
            <button onClick={Logout} className="bg-red-500 text-white py-1 px-3 rounded-md cursor-pointer hover:scale-105 duration-200">
              Logout
            </button>
          ) : (
            <Link to='/login' className="bg-slate-800 text-white py-1 px-3 rounded-md cursor-pointer hover:scale-105 duration-200">
              Login
            </Link>
          )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar