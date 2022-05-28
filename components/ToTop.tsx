import React, { useEffect, useState } from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

type Props = {
}

export const ToTop = (props: Props) => {
  const [scroll, setScroll] = useState(false)
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY > 200){
        setScroll(true)
      }else{
        setScroll(false)
      }
    })
  },[])
  return (
    <div onClick={()=>window.scrollTo(0,0)} className={`fixed bottom-20 bg-white z-100 right-10 transition-all ${scroll ? 'scale-100' : 'scale-0'} cursor-pointer rounded-full border-2 border-primary hover:opacity-80`}>
        <KeyboardArrowUpIcon sx={{fontSize:35}} />
    </div>
  )
}