import React, { ReactElement, useState } from 'react'
import Modal from '@mui/material/Modal';
import Image from 'next/image';
import GroupIcon from '@mui/icons-material/Group';
import ThumbsUpDownIcon from '@mui/icons-material/ThumbsUpDown';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

type Props = {
    title:string,
    img:string, 
    subtitle:string,
    desc:string,
    icon: ReactElement
}

const CardModal = (props: Props) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
      <>
    <button onClick={handleOpen} className='px-4 py-2 text-white font-semibold bg-secondary shadow-xl border-2 border-white rounded-2xl text-sm hover:bg-secondaryLighter transition-all ' >Learn More</button>
    <Modal
    open={open}
    onClose={handleClose}
  >
    <div className='absolute top-[100px]  left-[10%] lg:left-[25%] shadow-xl w-[80vw] lg:w-[50vw] bg-white rounded-xl'>
      <Image src={props.img} layout='responsive' objectFit='cover' height={'40vh'} width={'100%'} />
      <div className='p-4'>
      <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold mt-4 text-black'> {props.subtitle}</h1>
      <h2 className=' flex items-center text-md md:text-lg lg:text-xl tracking-[5px] uppercase font-heading font-bold mb-4 mt-1 '><span className='mr-2 mb-1'>{props.icon}</span> {props.title}</h2>
      <p className='text-stone-700 text-sm md:text-md lg:text-lg mb-2'>{props.desc}</p>
      <div className='flex items-center mt-4 mb-2'>
            <FacebookIcon className='bg-[#3b5998] hover:opacity-90 text-white p-1 cursor-pointer  rounded-full mr-2' fontSize='medium' />
            <WhatsAppIcon className='bg-[#25D366] hover:opacity-90 text-white p-1 cursor-pointer  rounded-full mr-2' fontSize='medium'/>
            <TwitterIcon className='bg-[#00acee] hover:opacity-90 text-white p-1 cursor-pointer  rounded-full mr-2' fontSize='medium'/>
            <InstagramIcon className='bg-[#E1306C] hover:opacity-90 text-white p-1 cursor-pointer  rounded-full mr-2' fontSize='medium'/>
        </div>
      </div>
      <div className='flex justify-between items-center p-1 sm:p-4 bg-primary/70 text-white font-medium text-[10px] sm:text-xs md:text-sm lg:text-md md:rounded-tl-full capitalize font-heading'>
        <div className='flex items-center text-center justify-center flex-col sm:flex-row p-2 flex-1'>
            <GroupIcon fontSize='medium' className=' sm:mr-4' />
            50k+ tourists visited annually
        </div>  
        <div className='p-2 flex-1 border-x-2 flex items-center justify-center text-center flex-col sm:flex-row'>
        <MonetizationOnIcon fontSize='medium' className=' sm:mr-4' />
            650M+ revenue generated
        </div>  
        <div className='flex items-center justify-center text-center flex-col sm:flex-row p-2 flex-1'>
            <ThumbsUpDownIcon fontSize='medium' className='sm:mr-4'  />
            20k+ positive reviews
        </div>  
      </div>
    </div>
  </Modal>
  </>
  )
}

export default CardModal