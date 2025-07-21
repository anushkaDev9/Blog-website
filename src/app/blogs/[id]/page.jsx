'use client'

import { assets, blog_data } from '@/app/Assets/assets'
import NaviBar from '@/app/navigation/NaviBar'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { use } from 'react'
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa";
import {Lato} from 'next/font/google'
const Page = ({ params }) => {
  const unwrappedParams = use(params)
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchBlogData = () => {
      const found = blog_data.find(item => Number(unwrappedParams.id) === item.id)
      if (found) {
        setData(found)
      }
    }
    fetchBlogData()
  }, [unwrappedParams])

  useEffect(() => {
    if (data) {
      console.log('Data updated:', )
    }
  }, [data])

  return (
  data ? (
    <>
      <div className='py-5  px-5 md:px-12 lg:px-28'>
        <Link href='/'><div className='flex justify-around items-center text-[#154656] '>
          <p className="text-2xl capitalize ">Blogger</p>
          <button className='bg-white flex items-center rounded-sm shadow-[-7px_7px_0px_#000000] shadow-[] gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border-solid border-2 border-black'>Get started <FaArrowRight /></button>
        </div></Link>
        <div className='text-center  my-24'>
          <p className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>{data.title}</p>
          <Image src={data.author_img} alt='title' width={60} h={60} className='mx-auto mt-6 border border-white rounded-full' />
          <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>
        </div>
        <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
            <Image src={data.image} width={720} height={720} alt="" />
            <h1 className='py-8 text-[26px] font-semibold '>Introduction:</h1>
            <p>{data.description}</p>
            <h3 className='my-5 text-[15px] leading-relaxed text-gray-700'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. </h3>
          <p className='text-black font-semibold' >Share this on social media </p>
        <div className='flex my-4 cursor-pointer'>
           <Image src={assets.facebook_icon} width={50} alt=""/>
           <Image src={assets.twitter_icon} width={50} alt=""/>
           <Image src={assets.googleplus_icon} width={50} alt=""/>
        </div>
        </div>
        
      </div>
    </>
  ) : null
)

}

export default Page
