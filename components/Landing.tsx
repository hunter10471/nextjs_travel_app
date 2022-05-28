import Image from 'next/image'
import React from 'react'
import img from '../public/imgs/pak_map1.png'
import CloudIcon from '@mui/icons-material/Cloud';

type Props = {}

export const Landing = (props: Props) => {
  return (
    <div className='flex items-center justify-between mx-2 sm:mx-5 md:mx-[5%] lg:mx-[10%] xl:[15%] 2xl:[18%]'>
      <div className='py-20' >
      <h1 className='font-heading text-8xl font-bold' >Pakistan</h1>
      <p className='max-w-[450px]  text-sm leading-7 my-5 '>Pakistan is blessed with abundant natural and historical riches,
          Incredible mountain landscapes are set against a backdrop of desert forts and stories of sultans and djinns.</p>

      <button className='py-2 px-4 text-lg rounded-2xl my-5 bg-secondary hover:bg-secondaryLighter text-white font-medium' >Visit Now</button>
      </div>
      <div className='relative'>
        <CloudIcon className='text-white absolute' sx={{fontSize:50}} />
        <CloudIcon className='text-white absolute right-0 top-10' sx={{fontSize:50}} />
      <Image height={650} objectFit='contain' src={img} />
      </div>
    </div>
  )
}