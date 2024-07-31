import { JLNEWS1 } from "@/constants"
import Image from "next/image"

const page = () => {
  return (
    <section className="py-28">
      <div className="main_container">
        <div className="bg-white py-7 px-3 rounded-2xl lg:grid lg:grid-cols-4">

          {JLNEWS1.map((link) => (
            <div className="grid gap-4 lg:col-span-3 lg:border-r lg:border-black lg:px-5">
              <h1 className="font-headFont text-3xl lg:text-5xl">{link.head}</h1>
              <span className="text-sm">Upload: {link.date}</span>
              <hr />
              <p>{link.para1}</p>

              <div className="w-full grid justify-center">
                <div className="relative w-[15rem] md:w-[18rem]">
                  <Image src={link.img1} width={0} height={0} alt={link.key} sizes='100vw' className='w-full h-auto' />
                  <div className="bg-pink-400 absolute -bottom-2 w-full h-1"></div>
                </div>
              </div>

              <p>{link.para2}</p>

              <div className="w-full grid justify-center">
                <div className="relative w-[15rem] md:w-[18rem]">
                  <Image src={link.img3} width={0} height={0} alt={link.key} sizes='100vw' className='w-full h-auto' />
                  <div className="bg-pink-400 absolute -bottom-2 w-full h-1"></div>
                </div>
              </div>


              <p>{link.para3}</p>

              <div className="w-full grid justify-center">
                <div className="relative w-[15rem] md:w-[18rem]">
                  <Image src={link.img3} width={0} height={0} alt={link.key} sizes='100vw' className='w-full h-auto' />
                  <div className="bg-pink-400 absolute -bottom-2 w-full h-1"></div>
                </div>
              </div>

              <p>{link.para4}</p>

              <div className="w-full grid justify-center">
                <div className="relative w-[15rem] md:w-[18rem]">
                  <Image src={link.img4} width={0} height={0} alt={link.key} sizes='100vw' className='w-full h-auto' />
                  <div className="bg-pink-400 absolute -bottom-2 w-full h-1"></div>
                </div>
              </div>
            </div>
          ))}


          <div className="w-full h-full lg:px-3 hidden lg:block">

          </div>
        </div>
      </div>
    </section>
  )
}

export default page