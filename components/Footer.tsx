import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
type Props = {}

export const Footer = (props: Props) => {
  return (
    <div id='footer' className='p-4 md:rounded-tl-full bg-slate-700 text-white flex items-center md:flex-row flex-col justify-between flex-wrap'>
        <h1 className='text-2xl mx-10 font-bold flex flex-col mr-[40px] font-heading w-fit'>
        <span className='font-regular font-sans text-xs text-center'>Beautiful</span>
            Pakistan
        </h1>
        <ul className='flex flex-wrap w-full font-medium justify-center items-center my-5 md:my-0 md:w-auto'>
            <li className='mx-4 my-3 lg:my-0  py-1 px-4 rounded-xl hover:bg-secondary hover:text-white cursor-pointer transition-all'>Tours</li>
            <li className='mx-4 my-3 lg:my-0  py-1 px-4 rounded-xl hover:bg-secondary hover:text-white cursor-pointer transition-all'>Our Guides</li>
            <li className='mx-4 my-3 lg:my-0  py-1 px-4 rounded-xl hover:bg-secondary hover:text-white cursor-pointer transition-all'>About us</li>
            <li className='mx-4 my-3 lg:my-0  py-1 px-4 rounded-xl hover:bg-secondary hover:text-white cursor-pointer transition-all'>Contact Us</li>
        </ul>
        <div className='flex flex-1 items-center justify-end'>
            <FacebookIcon className='text-white p-1 cursor-pointer hover:bg-primary/80 bg-primary rounded-full mx-1' fontSize='medium' />
            <TwitterIcon className='text-white p-1 cursor-pointer hover:bg-primary/80 bg-primary rounded-full mx-1' fontSize='medium'/>
            <WhatsAppIcon className='text-white p-1 cursor-pointer hover:bg-primary/80 bg-primary rounded-full mx-1' fontSize='medium'/>
            <InstagramIcon className='text-white p-1 cursor-pointer hover:bg-primary/80 bg-primary rounded-full mx-1' fontSize='medium'/>
        </div>
    </div>
  )
}