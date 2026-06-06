import Banner from "../../assets/banner.png";
import Code from "../../assets/code.svg";
import Object from "../../assets/oop.svg";
import User from "../../assets/user-clock.svg";
import Love from "../../assets/love.svg";
import Speed from "../../assets/speedometer.svg";
import Cloud from "../../assets/cloud.svg";
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import "../../Slider.css";

import Sliderfoto1 from "../../assets/service-slide-1.png";
import Sliderfoto2 from "../../assets/service-slide-2.png";
import Sliderfoto3 from "../../assets/service-slide-3.png";
import Cta from "../../assets/cta.svg";

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
      {/* slider1 */}
    


    <div className='sm:hidden block justify-center items-center sm:p-10'>
    <Swiper pagination={true} modules={[Pagination]} className="mySwiper ">
        <SwiperSlide><img src={Sliderfoto1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Sliderfoto2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Sliderfoto3} alt="" /></SwiperSlide>
      </Swiper>
    <div className='px-4 sm:w-[90%]'>
        <h1 className="text-3xl lg:text-4xl font-medium text-gray-900 pt-10 ">
            It is the most advanced digital marketing and it company.
          </h1>
          <p className="text-gray-600 sm:text-sm text-md py-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat. consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat.
          </p>
          <p className='text-[#0AA8A7] pb-6'>Check it out →</p>
    </div>
     
      </div>

    

    <div className='sm:flex hidden justify-center items-center sm:p-10'>
    <div className='px-4 sm:w-[90%]'>
        <h1 className="text-3xl lg:text-4xl font-medium text-gray-900 pt-10 ">
            It is the most advanced digital marketing and it company.
          </h1>
          <p className="text-gray-600 sm:text-sm text-md py-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat. consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat.
          </p>
          <p className='text-[#0AA8A7] pb-6'>Check it out →</p>
    </div>
     <Swiper pagination={true} modules={[Pagination]} className="mySwiper ">
        <SwiperSlide><img src={Sliderfoto1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Sliderfoto2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Sliderfoto3} alt="" /></SwiperSlide>
      </Swiper>
      </div>



{/* slider1 ci sekli */}


    <div className='sm:flex bg-[#EDF6F5] justify-center items-center sm:p-10'>
    <img className='sm:w-[50%] am:h-[%50] w-full h-full' src={Sliderfoto1} alt="" />
    <div className='px-4 sm:w-[90%]'>
        <h1 className="text-3xl lg:text-4xl font-medium text-gray-900 pt-10 ">
            It is a privately owned Information and cyber security company
          </h1>
          <p className="text-gray-600 sm:text-sm text-md py-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat. consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat.
          </p>
          <p className='text-[#0AA8A7] pb-6'>Check it out →</p>
    </div>
     
      </div>


{/* slider2 */}
<div className='sm:hidden block justify-center items-center sm:p-10'>
    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide><img src={Sliderfoto1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Sliderfoto2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Sliderfoto3} alt="" /></SwiperSlide>
      </Swiper>
    <div className='px-4 sm:w-[90%]'>
        <h1 className="text-3xl lg:text-4xl font-medium text-gray-900 pt-10 ">
            It’s a team of experienced and skilled people with distributions
          </h1>
          <p className="text-gray-600 sm:text-sm text-md py-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat. consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat.
          </p>
          <p className='text-[#0AA8A7] pb-6'>Check it out →</p>
    </div>
     
      </div>

<div className='sm:flex hidden justify-center items-center sm:p-10'>
    <div className='px-4 sm:w-[90%]'>
        <h1 className="text-3xl lg:text-4xl font-medium text-gray-900 pt-10 ">
            It’s a team of experienced and skilled people with distributions
          </h1>
          <p className="text-gray-600 sm:text-sm text-md py-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat. consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat.
          </p>
          <p className='text-[#0AA8A7] pb-6'>Check it out →</p>
    </div>
     <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide><img src={Sliderfoto1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Sliderfoto2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Sliderfoto3} alt="" /></SwiperSlide>
      </Swiper>
      </div>


{/* slider3 */}
<div className='sm:flex justify-center items-center sm:p-10 bg-[#EDF6F5]'>
    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide><img src={Sliderfoto1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Sliderfoto2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Sliderfoto3} alt="" /></SwiperSlide>
      </Swiper>
    <div className='px-4 sm:w-[90%]'>
        <h1 className="text-3xl lg:text-4xl font-medium text-gray-900 pt-10 ">
           A company standing different from others
          </h1>
          <p className="text-gray-600 sm:text-sm text-md py-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat. consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat.
          </p>
          <p className='text-[#0AA8A7] pb-6'>Check it out →</p>
    </div>
     
      </div>

      <section className="py-20 px-4">
      <h1 className="text-3xl lg:text-4xl font-medium text-center mb-16 sm:mb-40">
        Experience the best workflow with us
      </h1>

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-10">
        
        
        <div className="w-full lg:w-67">
          <img src={Cta} alt="Workflow" className="w-full h-auto" />
        </div>

      
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
          <h2 className="text-3xl font-bold">Ready to get started?</h2>
          <p className="text-gray-600 max-w-md mx-auto lg:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Consequat tristique eget amet, tempus eu at consecttur.
          </p>
          
          <button className="px-8 py-3 font-semibold rounded-full bg-[#0AA8A7] text-white hover:bg-[#088a89] transition">
            Contact Us
          </button>
        </div>

      </div>
    </section>

    </main>
    
  )
}

export default Home
