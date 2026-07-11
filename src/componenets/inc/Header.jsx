	import React, { memo, useState } from 'react'
	import Logo from "../../assets/logo.png";
	import { FaBars } from "react-icons/fa6";
	import { Link } from 'react-router';
	function Header() {
		const [menu,setMenu] = useState(false)
	return (
		<>
			<header className="p-4">
			<div className="container hidden sm:flex justify-between h-16 mx-auto">
				<a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
					<img src={Logo} alt="" />
				</a>
				<ul className="items-stretch hidden space-x-3 lg:flex ">
					<li className="flex">
						<Link to = {'/'} className="flex font-medium items-center px-4 -mb-1  dark:text-[#0AA8A7] ">Home</Link>
					</li>
					<li className="flex">
						<Link to = {'/blog'}  className="flex font-medium items-center px-4 -mb-1">Blog</Link>
					</li>
					<li className="flex">
						<Link to = {'/pricing'}  className="flex font-medium items-center px-4 -mb-1">Pricing</Link>
					</li>
					<li className="flex">
						<Link  to = {'/contact'} className="flex font-medium items-center px-4 -mb-1">Contact</Link>
					</li>
					<li className="flex">
						<Link to = {'/FAG'}  className="flex font-medium items-center px-4 -mb-1">FAQ</Link>
					</li>
				</ul>
				<div className="items-center flex-shrink-0 hidden lg:flex">
					<button className="self-center px-8 py-3 font-semibold rounded-4xl dark:bg-[#0AA8A7] dark:text-gray-50">Get Started</button>
				</div>
				
			</div>

			{/* mobil-menu */}
			<div className="container sm:hidden flex justify-between items-center  h-16 mx-auto">
					<img src={Logo} alt="" />
					<FaBars className='text-2xl' onClick={() => setMenu(!menu)}/>
						<div
							className={`fixed top-0 left-0 w-[150px] bg-[#0AA8A7] text-white
							transition-all duration-700
							${menu ? "translate-x-0" : "-translate-x-full"}`}
>
						<ul className="flex flex-col items-center gap-5 py-6  ">
							<li className="flex">
								<Link to = {'/'} className="flex font-medium items-center px-4 -mb-1   ">Home</Link>
							</li>
							<li className="flex">
								<Link to = {'/blog'}  className="flex font-medium items-center px-4 -mb-1">Blog</Link>
							</li>
							<li className="flex">
								<Link to = {'/pricing'}  className="flex font-medium items-center px-4 -mb-1">Pricing</Link>
							</li>
							<li className="flex">
								<Link  to = {'/contact'} className="flex font-medium items-center px-4 -mb-1">Contact</Link>
							</li>
							<li className="flex">
								<Link to = {'/FAG'}  className="flex font-medium items-center px-4 -mb-1">FAQ</Link>
							</li>
						</ul>
					</div>
					
			</div>
		</header>
		</>
	)
	}

	export default Header
