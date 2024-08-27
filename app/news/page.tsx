import { NEWS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (

    <section className='py-28'>
      <div className='main_container grid gap-20'>
        <h2 className='font-decFont text-white text-5xl text-center -rotate-6'>News <br /> <p className='text-xl font-decFont'>For latest updates</p></h2>

        <div className='md:grid md:grid-cols-5'>
          <div className='md:col-span-4'>
            <div className='grid md:grid-cols-3'>
              {NEWS.map((link) => (
                <Link href={`/news/${link.key}`} className='group' key={link.key}>
                  <article className='p-3 transition-all duration-300 group-hover:bg-white/90 group-hover:rounded-2xl' key={link.key}>
                    <div className='grid gap-3'>
                      <Image src={link.mainImg} width={0} height={0} sizes='100vw' alt='news' className='rounded-2xl w-full h-auto' />

                      <span className='group-hover:text-black text-white'><h3>{link.head}</h3></span>
                    </div>
                  </article>
                </Link>

              ))}
            </div>
          </div>

          <div className='bg-transparent  hidden md:block'></div>
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