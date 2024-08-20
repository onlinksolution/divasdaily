'use client'

import { GALLERY } from '@/constants'
import { label } from 'next-video/dist/utils/logger.js'
import Image from 'next/image'
import Link from 'next/link'

const RedCarpert = () => {

  return (
    <section className='py-16'>
      <div className='main_container grid gap-10'>
        <h2 className='font-decFont text-white text-5xl text-center -rotate-6'>Hot Divas <br /> Gallery</h2>

        <div className='grid gap-3'>
          <div className='gallery_card'>
            {GALLERY.slice(0, 8).map((link) => (
              <div className='relative overflow-hidden group'>
                <Image src={link.img} width={0} height={0} sizes='100vw' alt={link.key} className='w-full h-auto mt-[1rem]' />
                <div className='w-full h-[3rem] bg-black absolute -bottom-[3rem] flex justify-center items-center uppercase text-white group-hover:bottom-0 transition-all duration-300'>
                  <h3>{link.label}</h3>
                </div>
              </div>
            ))}

          </div>

          <Link href="/gallery" className='text-end underline'>See more</Link>
        </div>
      </div>

    </section>
  )
}

export default RedCarpert