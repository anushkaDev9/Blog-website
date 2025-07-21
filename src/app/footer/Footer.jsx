import Image from 'next/image'
import React from 'react'
import { assets } from '../Assets/assets'

const footer = () => {
  return (

<div className='flex justify-around gap-2 sm:gap:0 sm:flex-row bg-black py-5 item.center'>
     <p className='text-gray-400'>blogger</p>
     <p className=' capitalize text-sm text-gray-400'>All rigits reversed.Copyright @blogger</p>
    </div>
  )}
export default footer