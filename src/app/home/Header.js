import React from 'react'
import Image from 'next/image'
import { blog_data } from '../Assets/assets'
const Header = () => {
  return (
    <div className='py-5 px-5 md:px-12 lg:px-28'>
        <div className='my-8'>
                <p className='text-3xl sm:text-5xl font-medium text-center text-[#154656]'>Latest blog</p>
               <p className='mt-10 max-w-[740px] m-auto text-xs text-left sm:text-base leading-relaxed text-zinc-700 '>
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, 
  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
</p>

            <form className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border-1  border-black shadow-[-7px_7px_0px_#000000]'>
                <input type='email' placeholder='Enter your Email' className='pl-4 outline-none  '/>
                <button type='submit' className='border-l border-black  py-4 px-3 sm:px-8 active:bg-gray-600 active-text-white '>Subscribe</button>
            </form>
       </div>
       
    </div>
  )
}

export default Header