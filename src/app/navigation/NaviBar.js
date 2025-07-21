import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { assets } from '../Assets/assets';
const NaviBar = () => {
  return (
   <div className='flex justify-around items-center text-[#154656] '>
  <p className="text-2xl capitalize ">Blogger</p>
  <button className='bg-white flex items-center rounded-sm shadow-[-7px_7px_0px_#000000] shadow-[] gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border-solid border-2 border-black'>Get started <FaArrowRight /></button>
</div>

  )
}

export default NaviBar