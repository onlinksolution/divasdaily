'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import { PHOTOSHOOT } from '@/constants';

const Trending = () => {
  return (
    <section className='py-16'>
      <div className='main_container grid gap-10'>
        <h2 className='font-decFont text-white text-5xl text-center -rotate-6'>Photoshoots</h2>

        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination]}
          className="mySwiper w-full"
        >
          {PHOTOSHOOT.map((link) => (
            <SwiperSlide>
              <Link href={`/photoshoots/${link.key}`} className='group' key={link.key}>
                <article className='p-3 transition-all duration-300 group-hover:bg-white/90 group-hover:rounded-2xl' key={link.key}>
                  <div className='grid gap-3'>
                    <Image src={link.mainImg} width={0} height={0} sizes='100vw' alt='news' className='rounded-2xl w-full h-auto' />

                    <h3 className='group-hover:text-black text-white'>{link.title}</h3>
                    <span className="text-[0.65rem] -mt-3 group-hover:text-black text-white">Uploaded: {link.date}</span>
                  </div>
                </article>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        <Link href="/photoshoots" className='text-end underline'>See more</Link>
      </div>
    </section>

  )
}

export default Trending