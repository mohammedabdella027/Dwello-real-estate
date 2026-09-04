import React from 'react'
import { useState } from 'react'
import { Navbarlinks } from '../../mockData/data'
import Logo from '../../assets/Icons/logo.png'
import Search from '../../assets/Icons/search.png'
import User from '../../assets/Icons/user.png'
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from './ResponsiveMenu'

function Header() {
    const [open, setOpen] = useState(false);
    return (
        <div className='bg-[#FBF5F1] w-full'>
        <nav>
        <div className="container mx-auto px-6 lg:px-10 flex justify-between items-center">
            <div className='flex items-center py-8'>
                <img src={Logo} alt="Logo" />
            </div>

            <div className='hidden md:block'>
                <ul className='flex items-center gap-6 text-[#2B1B12] font-bold'>
                    {Navbarlinks.map((item) => {
                        return (
                            <li key={item.id}>
                                <a href={item.link} className='hover:text-[#602203]'>{item.title}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>

            <div className='flex gap-4 items-center'>
                <button> 
                    <img src={Search} alt="Search" className='cursor-pointer'/>
                </button>

                <button> 
                    <img src={User} alt="User" className='cursor-pointer'/>
                </button>

                <button className='bg-[#2B1B12] text-white text-base font-semibold px-8 py-2 rounded-xl w-fit hover:opacity-90 hover:scale-102 hover:duration-300 duration-200 transition-opacity mt-2 shadow-sm'>
                    Sign up
                </button>
            </div>

            <div className='md:hidden' onClick={() => {setOpen(!open)}}>
                <MdMenu className='text-4xl'/>
            </div>
        </div>
        </nav>

        <ResponsiveMenu open={open}/>

        </div>
    )
}

export default Header
