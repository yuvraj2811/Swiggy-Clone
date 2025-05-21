

import React from 'react'
import { SiSwiggy } from "react-icons/si";

const Footer = () => {
  return (
    <div>
        <div className='max-w-[1200px] mx-auto p-5 bg-slate-100 mb-8'>
          <div className='flex flex-wrap justify-between'>
            <div>
                <p className='text-[1.2rem] mb-1.5'>Company</p>
                <p className='text-slate-500 cursor-pointer'>About Us</p>
                <p className='text-slate-500 cursor-pointer'>Swiggy Corporate</p>
                <p className='text-slate-500 cursor-pointer'>Careers</p>
                <p className='text-slate-500 cursor-pointer'>Team</p>
                <p className='text-slate-500 cursor-pointer'>Swiggy One</p>
            </div>
            <div>
                <p className='text-[1.2rem] mb-1.5'>Contact Us</p>
                <p className='text-slate-500 cursor-pointer'>Help & Support</p>
                <p className='text-slate-500 cursor-pointer'>Partner with us</p>
                <p className='text-slate-500 cursor-pointer'>Ride with us</p>
            </div>
            <div>
                <p className='text-[1.2rem] mb-1.5'>Available in:</p>
                <p className='text-slate-500 cursor-pointer'>Patna</p>
                <p className='text-slate-500 cursor-pointer'>Bangalore</p>
                <p className='text-slate-500 cursor-pointer'>Hyderabad</p>
                <p className='text-slate-500 cursor-pointer'>Delhi</p>
                <p className='text-slate-500 cursor-pointer'>Mumbai</p>
            </div>
            <div>
                <p className='text-[1.2rem] mb-1.5'>Life at Swiggy</p>
                <p  className='text-slate-500 cursor-pointer'>Explore with Swiggy</p>
                <p  className='text-slate-500 cursor-pointer'>Swiggy News</p>
                <p  className='text-slate-500 cursor-pointer'>Snackables</p>
            </div>
          </div>
          <div className='flex items-center justify-center mt-5'>
            <div className='flex text-2xl text-orange-400 items-center'><SiSwiggy/> Swiggy</div>
          </div>
          <div className='tezt-[1.2rem] text-center text-slate-500 mt-2.5'><p>© 2025 Swiggy Limited</p></div>
          <hr className="mt-8 border-t-2 border-gray-300" />
        </div>
    </div>
  )
}

export default Footer