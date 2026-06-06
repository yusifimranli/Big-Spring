import React from 'react'

function Pricing() {
  return (
    <>
    <div className='px-3 sm:flex'>

    <div
         className="bg-white border border-slate-200 shadow-sm w-full max-w-sm rounded-lg mx-auto mt-6 p-4 sm:p-6">
         <div className='text-center'>
            <h3 className="text-black text-3xl font-semibold">Basic Plan</h3>
            <div className='py-3'>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed dark:text-slate-400"><span className='text-black text-6xl'>$49</span><span>/month</span></p>
            <p className="mt-2 text-xl text-[#777777] leading-relaxed">Best For Professionals</p>
            </div>
            <p className="mt-2 text-md text-[#777777] leading-relaxed ">Express Service</p>
            <p className="mt-2 text-md text-[#777777] leading-relaxed ">Customs Clearance</p>
            <p className="mt-2 text-md text-[#777777] leading-relaxed ">Time-Critical Services</p>
            
         </div>
         <button className='px-10 my-2 mx-14 py-3 mt-6 font-semibold rounded-4xl bg-[#0AA8A7] text-white'>Get Started for free
      </button>
      </div>

    <div
         className="bg-white border border-slate-200 shadow-sm w-full max-w-sm rounded-lg mx-auto mt-6 p-4 sm:p-6">
         <div className='text-center'>
            <h3 className="text-black text-3xl font-semibold">Professional Plan</h3>
            <div className='py-3'>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed dark:text-slate-400"><span className='text-black text-6xl'>$69</span><span>/month</span></p>
            <p className="mt-2 text-xl text-[#777777] leading-relaxed">Best For Small Individuals</p>
            </div>
            <p className="mt-2 text-md text-[#777777] leading-relaxed ">Express Service</p>
            <p className="mt-2 text-md text-[#777777] leading-relaxed ">Customs Clearance</p>
            <p className="mt-2 text-md text-[#777777] leading-relaxed ">Time-Critical Services</p>
            <p className="mt-2 text-md text-[#777777] leading-relaxed ">Cloud Service</p>
            <p className="mt-2 text-md text-[#777777] leading-relaxed ">Best Dashboard</p>

         </div>
         <button className='px-6 my-2 mx-24 py-3 mt-6 font-semibold rounded-4xl bg-[#0AA8A7] text-white'>Get Started
      </button>
      </div>

      <div
         className="bg-white border border-slate-200 shadow-sm w-full max-w-sm rounded-lg mx-auto mt-6 p-4 sm:p-6">
         <div className='text-center'>
            <h3 className="text-black text-3xl font-semibold">Professional Plan</h3>
            <div className='py-3'>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed dark:text-slate-400"><span className='text-black text-6xl'>$99</span><span>/month</span></p>
            <p className="mt-2 text-xl text-[#777777] leading-relaxed">Best For Professionals</p>
            </div>
            <p className="mt-2 text-md text-[#777777] leading-relaxed ">Express Service</p>
            <p className="mt-2 text-md text-[#777777] leading-relaxed ">Customs Clearance</p>
            <p className="mt-2 text-md text-[#777777] leading-relaxed ">Time-Critical Services</p>

         </div>
         <button className='px-6 my-2 mx-24 py-3 mt-6 font-semibold rounded-4xl bg-[#0AA8A7] text-white'>Get Started
      </button>
      </div>

      </div>
    </>

    
  )
}

export default Pricing
