"use client";
import React, { useState} from 'react'
import { blog_data } from '@/app/Assets/assets'
import BlogItem from '../BlogItem'

const BlogList = () => {
    const [menu,setmenu]=useState("All");

  return (
    <div>
        <div className='flex justify-center gap-6 my-10 capitalize '>
            <button onClick={()=>setmenu('All')} className={ menu ==='All'?'bg-[#186984] text-white py-1 px-4 rounded-sm capitalize cursor-pointer':"cursor-pointer"}>All </button>
             <button onClick={()=>setmenu('Technology')} className={menu==='Technology'?"bg-[#154656] text-white py-1 px-4 rounded-sm capitalize cursor-pointer":'cursor-pointer'}>Technology</button>
              <button onClick={()=>setmenu('Startup')} className={menu==='Startup'?"bg-[#154656] text-white py-1 px-4 rounded-sm capitalize cursor-pointer":'cursor-pointer'}>Startup</button>
               <button onClick={()=>setmenu('Lifestyle')} className={menu==='Lifestyle'?"bg-[#154656] text-white py-1 px-4 rounded-sm capitalize cursor-pointer":'cursor-pointer'}>lifestyle</button>
        </div>
        <div className='flex flex-wrap gap-1 justify-around gap-y-10 mb-16 xl:mx-24'>
      {blog_data.filter((item)=>menu==='All'?true:item.category===menu).map((item,index)=>{
        return <BlogItem key={index} id={item.id} image={item.image} description={item.description} title={item.title} category={item.category}/>
      })}
        </div>
    </div>
  )
}

export default BlogList