import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';

type Props = {}

export const Navbar = (props: Props) => {
    const [nav, setNav] = useState(false)
  return (
    <div className={` w-full flex flex-wrap items-center justify-between lg:justify-start py-10 px-10 lg:pl-[10%] transition-all overflow-hidden ${nav ? 'h-[320px]' :'h-[90px]'} `}>
        <h1 className='text-2xl font-bold flex flex-col mr-[40px] font-heading'>
            <span className='font-regular font-sans text-xs text-center'>Beautiful</span>
            Pakistan
        </h1>
        <button className='hover:bg-slate-100 p-2 rounded-[50%] lg:hidden ' onClick={()=>setNav(e=>!e)}  ><MenuIcon/></button>
        <ul className='flex flex-wrap w-full font-medium bg-white rounded-b-2xl shadow-md lg:shadow-none items-center flex-col my-2 lg:flex-row lg:w-auto lg:my-0 lg:bg-transparent  lg:ml-auto'>
            <li className='mx-4 my-3 lg:my-0  py-1 px-4 rounded-xl hover:bg-secondary hover:text-white cursor-pointer transition-all'><a href="#tours">Tours</a></li>
            <li className='mx-4 my-3 lg:my-0  py-1 px-4 rounded-xl hover:bg-secondary hover:text-white cursor-pointer transition-all'><a href="#guide">Our Guides</a> </li>
            <li className='mx-4 my-3 lg:my-0  py-1 px-4 rounded-xl hover:bg-secondary hover:text-white cursor-pointer transition-all'><a href="#footer"></a> About us</li>
            <li className='mx-4 my-3 lg:my-0  py-1 px-4 rounded-xl hover:bg-secondary hover:text-white cursor-pointer transition-all'><a href="#form">Contact Us</a></li>
        </ul>
    </div>
  )
}