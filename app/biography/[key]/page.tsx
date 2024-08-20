'use client'

import { BIOGRAPHY } from '@/constants'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import React from 'react'

interface BiographyProps {
  params: { key: string }
}

export default function Page({ params }: BiographyProps) {

  const { key } = params
  const article = BIOGRAPHY.find((biography) => biography.key === key)

  if (!article) {
    notFound()
  }

  return (
    <section className='py-28 font-mainFont'>

      <div className="main_container grid gap-8 bg-white rounded-3xl px-3 lg:px-10 py-10">

        <div className='border-b-2 border-black py-4 flex flex-col md:items-start md:flex-row md:gap-6 gap-3'>
          <Image src={article.mainImg} width={120} height={50} className='rounded-2xl self-end' alt={article.key} />

          <div className='flex flex-col gap-2 text-black self-start'>
            <span className='font-bold'>Full Name: <span className='font-400'>{article.fname}</span></span>
            <span className='font-bold'>Date of Birth: <span className='font-400'>{article.dob}</span></span>
            <span className='font-bold'>Place of Birth: <span className='font-400'>{article.pob}</span></span>
            <span className='font-bold'>Occupation: <span className='font-400'>{article.occupation}</span></span>
            <span className='font-bold'>Years Active: <span className='font-400'>{article.yearsActive}</span></span>
          </div>
        </div>

        <div className='text-black grid gap-3'>
          <h2 className='font-navFont font-600 text-3xl'>Early Life</h2>
          <hr />
          <p>{article.earlyLife}</p>
        </div>

        <div className='grid w-full md:justify-center'>
          <Image src={article.img1} width={0} height={0} alt={article.key} sizes='100vw' className='w-full h-auto md:w-[40rem]' />
        </div>

        <div className='text-black grid gap-3'>
          <h2 className='font-navFont font-600 text-3xl'>Career</h2>
          <hr />
          <p>{article.career1} <br /><br /> {article.career2} <br /><br /> {article.career3}</p>
        </div>

        <div className='text-black grid gap-3'>
          <h2 className='font-navFont font-600 text-3xl'>Personal Life</h2>
          <hr />
          <p>{article.pLife}</p>
        </div>

        <div className='grid w-full md:justify-center'>
          <Image src={article.img2} width={0} height={0} alt={article.key} sizes='100vw' className='w-full h-auto md:w-[40rem]' />
        </div>

        <div className='text-black gap-3'>
          <h2 className='font-navFont font-600 text-3xl'>Body Measurements</h2>
          <hr />
          <div>
            <table className='table mt-4'>
              <thead>
                <tr className='border-y'>
                  <th className='text-start py-3 px-2'>Detail</th>
                  <th className='text-start py-3 px-2'>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='py-3 px-2 font-bold'>Height:</td>
                  <td className='py-3 px-2'>{article.height}</td>
                </tr>
                <tr>
                  <td className='py-3 px-2 font-bold'>Weight:</td>
                  <td className='py-3 px-2'>{article.weight}</td>
                </tr>
                <tr>
                  <td className='py-3 px-2 font-bold'>Bust/Waist/Hip </td>
                  <td className='py-3 px-2'>{article.bwh}</td>
                </tr>
                <tr>
                  <td className='py-3 px-2 font-bold'>Bra Size:</td>
                  <td className='py-3 px-2'>{article.bra}</td>
                </tr>
                <tr>
                  <td className='py-3 px-2 font-bold'>Dress Size:</td>
                  <td className='py-3 px-2'>{article.dress}</td>
                </tr>
                <tr>
                  <td className='py-3 px-2 font-bold'>Shoe Size:</td>
                  <td className='py-3 px-2'>{article.shoe}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>{article.lastPara}</p>

        </div>
      </div>

    </section>

  )
}
