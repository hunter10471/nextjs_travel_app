import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
type Props = {}

export const Footer = (props: Props) => {
  return (
    <div className='p-10 rounded-tl-full bg-blue-200 flex items-center'>
        <h1 className='text-2xl mx-10 font-bold flex flex-col mr-[40px] font-heading w-fit'>
        <span className='font-regular font-sans text-xs text-center'>Beautiful</span>
            Pakistan
        </h1>
        <ul className='flex flex-wrap w-full font-medium bg-secondary shadow-md lg:shadow-none items-center flex-col my-2 lg:flex-row lg:w-auto lg:my-0 bg-black/5 lg:bg-transparent  lg:ml-[10%]'>
            <li className='mx-4 my-3 lg:my-0  py-1 px-4 rounded-xl hover:bg-secondary hover:text-white cursor-pointer transition-all'>Tours</li>
            <li className='mx-4 my-3 lg:my-0  py-1 px-4 rounded-xl hover:bg-secondary hover:text-white cursor-pointer transition-all'>Our Guides</li>
            <li className='mx-4 my-3 lg:my-0  py-1 px-4 rounded-xl hover:bg-secondary hover:text-white cursor-pointer transition-all'>About us</li>
            <li className='mx-4 my-3 lg:my-0  py-1 px-4 rounded-xl hover:bg-secondary hover:text-white cursor-pointer transition-all'>Contact Us</li>
        </ul>
        <div className='flex flex-1 items-center justify-end'>
            <FacebookIcon className='text-white p-1 cursor-pointer hover:bg-primary/80 bg-primary rounded-full mx-1' sx={{fontSize:25}} />
            <TwitterIcon className='text-white p-1 cursor-pointer hover:bg-primary/80 bg-primary rounded-full mx-1' sx={{fontSize:25}}/>
            <WhatsAppIcon className='text-white p-1 cursor-pointer hover:bg-primary/80 bg-primary rounded-full mx-1' sx={{fontSize:25}}/>
            <InstagramIcon className='text-white p-1 cursor-pointer hover:bg-primary/80 bg-primary rounded-full mx-1' sx={{fontSize:25}}/>
        </div>
    </div>
  )
}