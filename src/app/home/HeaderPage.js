
import React from 'react'
import Header from './Header'
import BlogItem from './BlogItem'
import BlogList from './comp/BlogList';

const HeaderPage = () => {
  return (
    <div className='  p-4 '>
      <Header />
     <BlogList/>
    </div>
  );
};

export default HeaderPage