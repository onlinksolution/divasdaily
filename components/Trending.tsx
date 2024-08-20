'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import { NEWS } from '@/constants';

const Trending = () => {
  return (
    <section className='py-16'>
      <div className='main_container grid gap-10'>
        <h2 className='font-decFont text-white text-5xl text-center -rotate-6'>Trending</h2>

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
          {NEWS.map((link) => (
            <SwiperSlide>
              <article className='p-3 rounded-2xl'>
                <div className='grid gap-3'>
                  <Image src={link.mainImg} width={0} height={0} sizes='100vw' alt={link.key} className='rounded-2xl w-full h-auto' />

                  <Link href={`/news/${link.key}`} key={link.key} className='hover:underline text-white'><h3>{link.head}</h3></Link>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        <Link href="/" className='text-end underline'>See more</Link>
      </div>
    </section>

  )
}

export default Trending