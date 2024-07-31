import { MEGANFOX } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <section className='py-28 font-mainFont'>
      {MEGANFOX.map((link) => (
        <div className="main_container grid gap-8 bg-white rounded-3xl px-8 py-10">

          <div className='border-b-2 border-black py-4 px-0 md:px-0 flex flex-col md:items-start md:flex-row md:gap-6 gap-3'>
            <Image src={link.mainImg} width={120} height={50} className='rounded-2xl self-end' alt="megan-fox" />

            <div className='flex flex-col gap-2 text-black self-start'>
              <span className='font-bold'>Full Name: <span className='font-400'>{link.fname}</span></span>
              <span className='font-bold'>Date of Birth: <span className='font-400'>{link.dob}</span></span>
              <span className='font-bold'>Place of Birth: <span className='font-400'>{link.pob}</span></span>
              <span className='font-bold'>Occupation: <span className='font-400'>{link.occupation}</span></span>
              <span className='font-bold'>Years Active: <span className='font-400'>{link.yearsActive}</span></span>
            </div>
          </div>

          <div className='text-black grid gap-3'>
            <h2 className='font-navFont font-600 text-3xl'>Early Life</h2>
            <hr />
            <p>{link.earlyLife}</p>
          </div>

          <div className='grid w-full md:justify-center'>
            <Image src={link.img1} width={0} height={0} alt={link.key} sizes='100vw' className='w-full h-auto md:w-[40rem]' />
          </div>

          <div className='text-black grid gap-3'>
            <h2 className='font-navFont font-600 text-3xl'>Career</h2>
            <hr />
            <p>{link.career1} <br /><br /> {link.career2}</p>
          </div>

          <div className='text-black grid gap-3'>
            <h2 className='font-navFont font-600 text-3xl'>Personal Life</h2>
            <hr />
            <p>{link.pLife}</p>
          </div>

          <div className='grid w-full md:justify-center'>
            <Image src={link.img2} width={0} height={0} alt={link.key} sizes='100vw' className='w-full h-auto md:w-[40rem]' />
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
                    <td className='py-3 px-2'>{link.height}</td>
                  </tr>
                  <tr>
                    <td className='py-3 px-2 font-bold'>Weight:</td>
                    <td className='py-3 px-2'>{link.weight}</td>
                  </tr>
                  <tr>
                    <td className='py-3 px-2 font-bold'>Bra Size:</td>
                    <td className='py-3 px-2'>{link.bra}</td>
                  </tr>
                  <tr>
                    <td className='py-3 px-2 font-bold'>Dress Size:</td>
                    <td className='py-3 px-2'>{link.dress}</td>
                  </tr>
                  <tr>
                    <td className='py-3 px-2 font-bold'>Shoe Size:</td>
                    <td className='py-3 px-2'>{link.shoe}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>{link.lastPara}</p>

          </div>
        </div>
      ))}



    </section>

  )
}

export default page