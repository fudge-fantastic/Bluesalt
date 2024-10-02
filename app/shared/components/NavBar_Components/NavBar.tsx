import NavData  from './NavData'
import { Link } from '@remix-run/react'
import { Button } from "@nextui-org/react";
import { IoMenu } from "react-icons/io5";
import React from 'react';
import { ResponsiveMenu } from './ResponsiveMenu';

export default function NavBar() {
  const [open, setOpen] = React.useState(false)
  const [dark, setDark] = React.useState(false);

  const darkModeHandler = () => {
      setDark(!dark);
      document.body.classList.toggle("dark");
  }

  return (

      <nav className="sticky top-0 bg-white text-black dark:bg-black dark:text-white duration-200 shadow-md">
          <div  className="flex justify-between px-8 py-4">
            <div className="text-xl font-bold flex items-center gap-4 uppercase">
              <div className='w-8 h-8'>
              <img src={dark ? "valknut_white.svg" : "valknut.svg"} alt="logo" className="duration-200" />
              </div>
              <p>BlueSalt</p>
            </div>

            {/* The md:block will make the NavBar disappear on mobile */}
            <div className='hidden lg:block m-2'>
              <ul className="flex items-center gap-4 text-lg">
                {NavData.map((item) => {
                  return (
                  <li key={item.name}>
                    <Link className='inline-block py-1 px-4 hover:text-cyan-600 duration-200 font-semibold' to={item.href}>{item.name}</Link>
                  </li>)
                  
                })}
              </ul>
            </div>

            <div className="items-center gap-4 hidden lg:flex">
            <Button size="md" variant="flat" className="text-md font-semibold rounded-full" onClick={darkModeHandler}>
            {dark ? (<img src="sun.svg" alt="Light Mode" className="w-6 h-6" />) : (<img src="moon.svg" alt="Dark Mode" className="w-6 h-6" />)}
          </Button> 
              <Button size= "md" variant="flat" className="text-md font-semibold" >Login</Button>  
              <Button size= "md" variant="shadow" className="text-md font-semibold">Sign up</Button>  
            </div>

            <button className="lg:hidden" onClick={() => setOpen(!open)}>
              <IoMenu className="text-3xl"/>
            </button>
            {/* Mobile SideBar Section */}

            <ResponsiveMenu open={open} />
          </div>

      </nav>

    // Mobile SideBar Section
  )
}
