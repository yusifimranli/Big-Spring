import React from 'react'
import Logo from "../../assets/logo.png";
import { FaBars } from "react-icons/fa6";
import { Link } from 'react-router';
function Header() {
  return (
    <>
          <header class="p-4">
		<div class="container hidden sm:flex justify-between h-16 mx-auto">
			<a rel="noopener noreferrer" href="#" aria-label="Back to homepage" class="flex items-center p-2">
                <img src={Logo} alt="" />
			</a>
			<ul class="items-stretch hidden space-x-3 lg:flex ">
				<li class="flex">
					<Link to = {'/'} class="flex font-medium items-center px-4 -mb-1  dark:text-[#0AA8A7] ">Home</Link>
				</li>
				<li class="flex">
					<Link to = {'/blog'}  class="flex font-medium items-center px-4 -mb-1">Blog</Link>
				</li>
				<li class="flex">
					<Link to = {'/pricing'}  class="flex font-medium items-center px-4 -mb-1">Pricing</Link>
				</li>
				<li class="flex">
					<Link  to = {'/contact'} class="flex font-medium items-center px-4 -mb-1">Contact</Link>
				</li>
				<li class="flex">
					<Link to = {'/FAG'}  class="flex font-medium items-center px-4 -mb-1">FAQ</Link>
				</li>
			</ul>
			<div class="items-center flex-shrink-0 hidden lg:flex">
				<button class="self-center px-8 py-3 font-semibold rounded-4xl dark:bg-[#0AA8A7] dark:text-gray-50">Get Started</button>
			</div>
			
		</div>

        {/* mobil-menu */}
        <div class="container sm:hidden flex justify-between items-center  h-16 mx-auto">
                <img src={Logo} alt="" />
                <FaBars className='text-2xl' />
		</div>
	</header>
    </>
  )
}

export default Header
