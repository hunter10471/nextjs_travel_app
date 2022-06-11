import { Card, CardActions, CardContent, CardMedia, IconButton } from '@mui/material'
import React, { useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

type Props = {
  img: string,
  title: string,
  subTitle:string,
  desc: string,
  rating: number,
}

export const MapCard = (props: Props) => {
  const [favorite, setFavorite] = useState(false)
  const [like, setLike] = useState(false)
  return (
    <Card  sx={{ maxWidth: 345, boxShadow:'none'}}>
    <CardMedia
      component="img"
      alt="city picture"
      height="150"
      image={props.img}
      className='h-[200px]'
    />
    <CardContent sx={{p:0}}>
      <h2 className='text-3xl lg:text-4xl font-extrabold text-primary mt-4'>
       {props.title}
      </h2>
      <h3 className='text-xs mt-1 font-heading tracking-[5px] text-stone-400 font-bold uppercase '>{props.subTitle}</h3>
      <p className='tracking-wide text-[12px] lg:text-[15px]'>
        {props.desc}
      </p>
    </CardContent>
    <CardActions sx={{p:0}} >
        <IconButton sx={{p:0,pr:1}}  onClick={()=>setFavorite(!favorite)} ><FavoriteIcon fontSize='medium' className={`${favorite ? 'text-rose-500 ' : ''}`} /> <span className='text-sm ml-2' >4.5k</span> </IconButton>
        <IconButton sx={{p:0}} onClick={()=>setLike(!like)} ><ThumbUpIcon fontSize='medium' className={`${like ? 'text-amber-500 ' : ''}`} /><span className='text-sm ml-2' >5.5k</span></IconButton>
      </CardActions>
  </Card>
  )
}