import { GALLERY } from '@/constants'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import React from 'react'

interface GalleryProps {
  params: { key: string }
}

const page = ({ params }: GalleryProps) => {

  const { key } = params
  const gallery = GALLERY.find((img) => img.key === key)

  if (!gallery) {
    notFound()
  }

  return (
    <div className='w-full h-full fixed bg-black z-50 flex justify-center items-center'>
      <Image src={gallery.img} width={0} height={0} sizes='100vw' className='w-[25rem]' alt='img' />
    </div>
  )
}

export default page