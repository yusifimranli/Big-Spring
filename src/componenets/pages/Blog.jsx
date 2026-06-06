import React from 'react'
import Blog4 from "../../assets/blog-4.jpg";
import Blog3 from "../../assets/blog-3.jpg";
import Blog2 from "../../assets/blog-2.jpg";

function Blog() {
  return (
    <>
      <h1 className='text-center text-5xl mb-12'>Latest news</h1>
      <div className='sm:flex items-center justify-center sm:mx-10 my-10'>
      <img className='px-4 sm:w-[45%] w-96' src={Blog4} alt="" />
      <div className='px-4'>
        <h1 className='font-medium text-2xl sm:text-4xl py-2'>Adversus is a web-based dialer and practical CRM solution</h1>
        <h2 className='py-4 sm:py-0'>##### Heading exampleHere is an example of headings. You can use this heading by the following markdown rules. For example: use # for heading 1 and use ###### for heading 6.# Heading 1## He</h2>
        <button class="text-center px-8 my-2 py-3 font-semibold rounded-4xl dark:bg-[#0AA8A7] dark:text-gray-50">Read More</button>
      </div>
      </div>


      <div className='sm:flex items-center justify-center mx-10'>

  <div className='my-4'>
    <img className='px-4 sm:w-full object-cover w-96 rounded-xl' src={Blog4} alt="" />

    <div className='px-4'>
      <h1 className='font-medium text-2xl sm:text-3xl py-2'>
        How to make toys from old Olarpaper
      </h1>

      <button className='px-8 my-2 py-3 font-semibold rounded-full bg-[#0AA8A7] text-white'>
        Read More
      </button>
    </div>
  </div>

  <div className='my-4'>
    <img className='px-4 sm:w-full object-cover w-96 rounded-xl' src={Blog3} alt="" />

    <div className='px-4'>
      <h1 className='font-medium text-2xl sm:text-3xl py-2'>
        What you need to know about Photography
      </h1>

      <button className='px-8 my-2 py-3 font-semibold rounded-full bg-[#0AA8A7] text-white'>
        Read More
      </button>
    </div>
  </div>

  <div className='my-4'>
    <img className='px-4 sm:w-full object-cover w-96 rounded-xl' src={Blog2} alt="" />

    <div className='px-4'>
      <h1 className='font-medium text-2xl sm:text-3xl py-2'>
        How to make toys from old Olarpaper
      </h1>

      <button className='px-8 my-2 py-3 font-semibold rounded-full bg-[#0AA8A7] text-white'>
        Read More
      </button>
    </div>
  </div>

</div>
    </>
  )
}

export default Blog
