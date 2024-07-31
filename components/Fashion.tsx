import { FASHION } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Fashion = () => {
  return (
    <section className='py-16'>
      <div className='main_container grid gap-20'>
        <h2 className='font-decFont text-white text-5xl text-center -rotate-6'>Fashion</h2>

        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7'>
          {FASHION.map((link) => (
            <article className='grid gap-3 group'>
              <Image src={link.img} width={0} height={0} alt={link.key} sizes='100vw' className='w-full h-auto rounded-2xl' />
              <Link href='/' className='text-xl text-white font-mainFont group-hover:underline'>
                {link.label}
              </Link>
              <p className='text-gray-100 font-mainFont text-sm'>Upload {link.date}</p>
            </article>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Fashion