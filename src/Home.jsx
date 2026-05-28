import React from 'react'
import Banner from './assets/banner.png'
import Code from  './assets/code.svg'
import Object from  './assets/oop.svg'
import User from  './assets/user-clock.svg'
import Love from  './assets/love.svg'
import Speed from  './assets/speedometer.svg'
import Cloud from  './assets/cloud.svg'

function Home() {
  return (
    <main className="">
      <div className="mx-auto px-4 py-16 flex flex-col items-center gap-10">
        <div className=" text-center space-y-4 sm:w-[50%]">
          <h1 className="text-4xl lg:text-4xl font-bold text-gray-900 ">
            Let us solve your critical website development challenges
          </h1>
          <p className="text-gray-600 sm:text-sm text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nihil enim maxime corporis cumque 
            totam aliquid nam sint inventore optio modi neque laborum officiis necessitatibus.
          </p>
        </div>

        <div className="lg:w-1/2">
          <img src={Banner} alt="Banner" className="w-full h-auto object-cover" />
        </div>

      </div>

      {/* Something You Need To Know */}
    <div className='bg-[#EDF6F5] py-20 mt-14'>
        <h1 className='text-center text-3xl font-bold mb-12'>Something You Need To Know</h1>
        
        <div className='container mx-auto px-4 flex flex-wrap justify-center gap-8'>
          
          <div className='bg-white text-center p-6 shadow-xl rounded-lg w-full md:w-[45%] lg:w-[30%]'>
            <img src={Code} className='w-8 h-8 mx-auto' alt="" />
            <h2 className='text-xl  font-semibold mb-5'>Clean Code</h2>
            <p className='text-gray-600 sm:text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, reprehenderit.</p>
          </div>

          <div className='bg-white text-center p-6 shadow-xl rounded-lg w-full md:w-[45%] lg:w-[30%]'>
            <img src={Object} className='w-8 h-8 mx-auto' alt="" />
            <h2 className='text-xl font-semibold mb-5'>Object Oriented</h2>
            <p className='text-gray-600 sm:text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, reprehenderit.</p>
          </div>

          <div className='bg-white text-center p-6 shadow-xl rounded-lg w-full md:w-[45%] lg:w-[30%]'>
            <img src={User} className='w-8 h-8 mx-auto' alt="" />
            <h2 className='text-xl font-semibold mb-5'>24h Service</h2>
            <p className='text-gray-600 sm:text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, reprehenderit.</p>
          </div>

          <div className='bg-white text-center p-6 shadow-xl rounded-lg w-full md:w-[45%] lg:w-[30%]'>
            <img src={Love} className='w-8 h-8 mx-auto' alt="" />
            <h2 className='text-xl font-semibold mb-5'>Value for Money</h2>
            <p className='text-gray-600 sm:text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, reprehenderit.</p>
          </div>

          <div className='bg-white text-center p-6 shadow-xl rounded-lg w-full md:w-[45%] lg:w-[30%]'>
            <img src={Speed} className='w-8 h-8 mx-auto' alt="" />
            <h2 className='text-xl font-semibold mb-5'>Faster Response</h2>
            <p className='text-gray-600 sm:text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, reprehenderit.</p>
          </div>

          <div className='bg-white text-center p-6 shadow-xl rounded-lg w-full md:w-[45%] lg:w-[30%]'>
            <img src={Cloud} className='w-8 h-8 mx-auto' alt="" />
            <h2 className='text-xl font-semibold mb-5'>Cloud Support</h2>
            <p className='text-gray-600 sm:text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, reprehenderit.</p>
          </div>

        </div>
      </div>
    </main>
  )
}

export default Home