import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaSkype } from "react-icons/fa6"; 
import Logo from './assets/logo.png'

function Footer() {
  return (
    <footer className="bg-[#EDF6F5] py-16 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
       
        <div>
          <h4 className="font-bold text-lg mb-6">Company</h4>
          <ul className="space-y-4 text-gray-600">
            <li><a href="#" className="hover:text-[#0AA8A7]">Pricing</a></li>
            <li><a href="#" className="hover:text-[#0AA8A7]">Quick Start</a></li>
          </ul>
        </div>

        
        <div>
          <h4 className="font-bold text-lg mb-6">Product</h4>
          <ul className="space-y-4 text-gray-600">
            <li><a href="#" className="hover:text-[#0AA8A7]">Features</a></li>
            <li><a href="#" className="hover:text-[#0AA8A7]">Platform</a></li>
            <li><a href="#" className="hover:text-[#0AA8A7]">Pricing</a></li>
          </ul>
        </div>

      
        <div>
          <h4 className="font-bold text-lg mb-6">Support</h4>
          <ul className="space-y-4 text-gray-600">
            <li><a href="#" className="hover:text-[#0AA8A7]">FAQ</a></li>
            <li><a href="#" className="hover:text-[#0AA8A7]">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-[#0AA8A7]">Terms & Conditions</a></li>
          </ul>
        </div>

      
        <div>
          <img src={Logo} alt="" />
          <p className="text-gray-600 mb-6 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur elit. Consjat tristique eget amet, tempus eu at cttur.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 border border-[#0AA8A7] text-[#0AA8A7] rounded-full flex items-center justify-center hover:bg-[#0AA8A7] hover:text-white transition"><FaFacebookF /></a>
            <a href="#" className="w-10 h-10 border border-[#0AA8A7] text-[#0AA8A7] rounded-full flex items-center justify-center hover:bg-[#0AA8A7] hover:text-white transition"><FaTwitter /></a>
            <a href="#" className="w-10 h-10 border border-[#0AA8A7] text-[#0AA8A7] rounded-full flex items-center justify-center hover:bg-[#0AA8A7] hover:text-white transition"><FaLinkedinIn /></a>
            <a href="#" className="w-10 h-10 border border-[#0AA8A7] text-[#0AA8A7] rounded-full flex items-center justify-center hover:bg-[#0AA8A7] hover:text-white transition"><FaSkype /></a>
          </div>
        </div>
      </div>

    
      <div className="container mx-auto mt-16 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
        Designed and Developed By <strong>Themefisher</strong> • Distributed by <strong>ThemeWagon</strong>
      </div>
    </footer>
  )
}

export default Footer