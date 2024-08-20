import { GALLERY } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (

    <section className='py-24'>
      <div className='main_container grid gap-10'>
        <h2 className='font-decFont text-white text-5xl text-center -rotate-6'>Gallery <br /> <p className='text-xl font-decFont'>Hot Divas Collection</p></h2>

        <div className='grid gap-3'>
          <div className='gallery_card'>
            {GALLERY.map((link) => (
              <Link href={`/gallery/${link.key}`}>
                <div className='relative overflow-hidden group'>
                  <Image src={link.img} width={0} height={0} sizes='100vw' alt={link.key} className='w-full h-auto mt-[1rem]' />
                  <div className='w-full h-[3rem] bg-black absolute -bottom-[3rem] flex justify-center items-center uppercase text-white group-hover:bottom-0 transition-all duration-300'>
                    <h3>{link.label}</h3>
                  </div>
                </div>
              </Link>
            ))}

          </div>
        </div>
      </div>

    </section>

    // <div className="pt-[5rem] pb-5 w-full flex flex-col items-center">
    //   <Image src="/construction.png" width={400} height={400} alt="under constrction" className="animate-pulse" />
    //   <h2 className="text-white text-center font-mainFont text-2xl">Sorry! <br /> We are Under Maintanance.</h2>
    // </div>
  )
}

export default page