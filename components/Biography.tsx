'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { BIOGRAPHY } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';

const Biography = () => {
  return (
    <section className='py-16'>
      <div className='main_container grid gap-20'>
        <h2 className='font-decFont text-white text-5xl text-center -rotate-6'>Biography</h2>

        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            328: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination]}
          className="mySwiper w-full"
        >
          {BIOGRAPHY.sort((a, b) => a.label.localeCompare(b.label)).map((link) => (
            <SwiperSlide key={link.key}>
              <div className='group relative'>
                <Link href={`/biography/${link.key}`} className='relative overflow-hidden'>
                  <Image src={link.mainImg} width={0} height={0} sizes='100vw' className='w-full h-auto rounded-2xl group-hover:scale-95 transition-all duration-300' alt={link.key} />
                  <div className='w-full h-[3rem] flex justify-center items-center bg-black absolute bottom-0 group-hover:scale-95 transition-all duration-300'>
                    <h3 className='text-white uppercase'>{link.label}</h3>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Biography