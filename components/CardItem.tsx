import { Card, CardActions, CardContent} from '@mui/material'
import Image from 'next/image';
import React, { ReactElement } from 'react'
import CardModal from './CardModal';

interface CardProps {
  img: string,
  title: string,
  desc: string,
  modalDesc: string,
  icon: ReactElement
}

export const CardItem = (props: CardProps) => {
  return (
    <Card className='relative shadow-lg rounded-bl-2xl  flex-shrink-0 max-w-[300px]' sx={{maxWidth:{borderRadius:5,boxShadow:'none',margin:20}}}>
      <Image src={props.img} width='100%' height='80%' layout='responsive' objectFit={'contain'}  />
      <CardContent className='bg-primary/70 rounded-tr-2xl '>
        <h2 className='flex items-center text-xs font-heading font-semibold mb-2 tracking-[5px] uppercase text-white'>
          <span className='mr-2'>{props.icon}</span> 
          {props.title}
        </h2>
        <p className='font-extrabold text-2xl pointer-events-none text-white '>
          {props.desc}
        </p>
      </CardContent>
      <CardActions sx={{paddingBottom:2}} className='bg-primary/70' >
        <CardModal icon={props.icon} img={props.img} title={props.title} subtitle={props.desc} desc={props.modalDesc}   />
      </CardActions>
    </Card>
  )
}