import { RiArrowUpLine } from '@remixicon/react'
import Link from 'next/link'
import React from 'react'

const ScrollUp = () => {
  return (

    <Link href="#" className='bg-pink-400 z-20 p-4 rounded-xl fixed bottom-8 right-7 group hover:bg-white transition-all duration-300'>
      <RiArrowUpLine className='text-white group-hover:text-black' size={20} />
    </Link>

  )
}

export default ScrollUp