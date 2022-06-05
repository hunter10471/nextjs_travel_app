import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';import Image from 'next/image';
import Rating from '@mui/material/Rating'

type Props = {
    title: string,
    img: string,
    desc: string,
    price: string
}

export const AccordionCard = (props: Props) => {
  return (
    <Accordion className='border-b-2 shadow-secondary shadow-md rounded-br-2xl m-4 w-[80vw] md:max-w-[500px]'>
    <AccordionSummary
      expandIcon={<ArrowDropDownIcon className='text-primary' fontSize='large' />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <h2 className='text-2xl text-primary font-bold p-2'>{props.title}</h2>
    </AccordionSummary>
    <AccordionDetails>
    <Image height={350} src={props.img} />
    <div className='flex items-start'>
     <p className=' tracking-wide my-4 p-4 rounded-br-2xl flex flex-col text-lg font-semibold font-heading capitalize '>
        {props.desc}
        <span className='flex items-center font-bold mt-2'>
        <Rating className='mr-2' defaultValue={5} precision={0.5} readOnly />
         5.0
        </span>
     </p>
     <h3 className='m-4 p-4 text-3xl font-bold text-primary hidden md:block'>Rs.{props.price}</h3>
    </div>
    <div className='flex items-center justify-between'>
    <button className='mx-2 px-4 py-2 rounded-2xl bg-secondary hover:bg-secondaryLighter text-white font-medium'><a href="#form">Book Now</a></button>
    <h3 className=' mx-2 text-xl font-bold text-primary block md:hidden'>Rs.{props.price}</h3>
    </div>
    </AccordionDetails>
  </Accordion>
  )
}