
import Image from 'next/image'
import React from 'react'
import { assets, blog_data } from '../Assets/assets'
import Link from 'next/link'

const BlogItem = ({title,description,image,category,id}) => {
  return (
    <div className='max-w-[330px] sm:max-w-[300px] cursor-pointer bg-white border border-gray-200 rounded-md hover:shadow-[-7px_7px_0px_#000000]'>
       <Link href={`/blogs/${id}`}><Image src={image} alt={title} width={400} height={400} className='border-b border-black' />
<p className={`ml-5 mt-5 px-4 py-2 rounded-md inline-block text-white text-sm ${
  category === 'Technology' ? 'bg-amber-600' :
  category === 'Lifestyle' ? 'bg-red-600' :
  category === 'Startup' ? 'bg-blue-600' :
  'bg-black'
}`}>
  {category}
</p>

       <div className='p-5'>
             <h5 className='mb-3 text-lg font-medium tracking-tight text-gray-900'>{title}</h5>
            <p className='mb-3 tracking-tight text-gray-700'>{description}</p>
            
        <div className='inline-flex items-center font-semibold py-2 text-center'>
          
          Read more <Image src={assets.arrow} alt='arow' width={12} className='ml-2'/>
        </div>
       </div></Link>
    </div>
  )
}

export default BlogItem