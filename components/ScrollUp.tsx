'use client';

import { RiArrowUpLine } from '@remixicon/react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const ScrollUp = () => {

  const [backTopButton, setBackTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setBackTopButton(true);
      } else {
        setBackTopButton(false);
      }
    })
  }, [])

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (

    <div>
      {backTopButton && (
        <Link href="#" className='bg-white z-20 p-4 rounded-xl opacity-70 fixed bottom-8 right-7 hover:opacity-100 transition-all duration-300'>
          <RiArrowUpLine className='text-pink-600' size={20} />
        </Link>
      )}
    </div>

  )
}

export default ScrollUp