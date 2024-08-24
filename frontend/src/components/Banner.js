import React from 'react';
import Bannerimg from '../assets/images/banner.png';
import { Link } from 'react-router-dom';

const Banner = () => {

    const state = () => {
        localStorage.getItem('user')
    }

    return (
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row items-center">
            <div className="order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32">
                <div className="space-y-8">
                    <h1 className="text-5xl font-extrabold leading-tight">
                        Hello, welcome here for <span className="text-blue-500">checkup everyday!</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-700">
                        Experience top-notch healthcare services with us! Book your appointments easily and stay on top of your health with our expert care and advanced medical treatments.
                    </p>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Email"
                            className="w-full py-3 pl-12 pr-4 rounded-lg border border-gray-300 focus:ring-2 outline-none"
                        />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500">
                            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                        </svg>
                    </div>
                </div>
                {
                    state ? (
                        <Link to='/doctors'>
               <button className="mt-8 bg-blue-500 text-white w-full md:w-auto py-3 px-8 rounded-lg
hover:bg-blue-700 duration-200
">Book Appointment
                </button>
               </Link> 
                    ):(
               <Link to='/login'>
               <button className="mt-8 bg-blue-500 text-white w-full md:w-auto py-3 px-8 rounded-lg
hover:bg-blue-700 duration-200
">Book Appointment
                </button>
               </Link> 
                    )
                }
            </div>
            <div className="order-1 w-full md:w-1/2 flex justify-center md:justify-end">
                <img src={Bannerimg} className="w-95 h-95 mt-12" alt="Banner" />
            </div>
        </div>
    );
};

export default Banner;
