

import React from 'react'
import { FaAngleDown } from "react-icons/fa6";

const Button = () => {
  return (
    <div className='flex justify-center'>
        <button className='border border-slate-500 flex items-center py-3 px-12 m-4 cursor-pointer rounded-2xl text-orange-400'>Show More< FaAngleDown /></button>
    </div>
  )
}

export default Button