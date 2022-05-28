import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import Image from 'next/image';
import React from 'react'

interface CardProps {
  img: string,
  title: string,
  desc: string
}

export const CardItem = (props: CardProps) => {
  return (
    <Card className='shadow-lg rounded-bl-2xl' sx={{maxWidth:{ lg: 300,md:250,sm:150,borderRadius:5,boxShadow:'none',margin:20}}}>
      <Image src={props.img} width='100%' height='80%' layout='responsive' objectFit={'contain'}  />
      <CardContent className='bg-primary/80 rounded-tr-2xl  '>
        <h2 className=' font-heading font-semibold my-1 tracking-[5px] capitalize text-white'>
          {props.title}
        </h2>
        <p className='font-extrabold text-2xl pointer-events-none text-white '>
          {props.desc}
        </p>
      </CardContent>
      <CardActions sx={{paddingBottom:2}} className='bg-primary/80' >
        <button className='px-4 py-2 text-white font-semibold bg-secondary shadow-xl border-2 border-white rounded-2xl text-sm hover:bg-secondaryLighter transition-all ' >Learn More</button>
      </CardActions>
    </Card>
  )
}