import Search from '@/components/Search'
import { BIOGRAPHY } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {

  return (

    <section className='py-28'>
      <div className='main_container grid gap-20'>
        <h2 className='font-decFont text-white text-5xl text-center -rotate-6'>Biography <br /> <p className='text-xl font-decFont'>The life of your divas</p></h2>

        {/* <Search /> */}

        <div className='grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
          {BIOGRAPHY.sort((a, b) => a.label.localeCompare(b.label)).map((link) => (
            <div className='group relative'>
              <Link href={`/biography/${link.key}`} className='relative overflow-hidden' key={link.key}>
                <Image src={link.mainImg} width={0} height={0} sizes='100vw' className='w-full h-auto rounded-2xl group-hover:scale-95 transition-all duration-300' alt={link.key} />
                <div className='w-full h-[3rem] flex justify-center items-center bg-black absolute bottom-0 group-hover:scale-95 transition-all duration-300'>
                  <h3 className='text-white uppercase'>{link.label}</h3>
                </div>
              </Link>
            </div>
          ))}
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