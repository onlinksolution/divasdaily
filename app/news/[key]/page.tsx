import { NEWS } from "@/constants"
import Image from "next/image"
import { notFound } from "next/navigation"

interface NewsProps {
  params: { key: string }
}

const page = ({ params }: NewsProps) => {

  const { key } = params
  const news = NEWS.find((latest) => latest.key === key)

  if (!news) {
    notFound()
  }

  return (
    <section className="py-28">
      <div className="main_container">
        <div className="bg-white py-7 px-3 rounded-2xl lg:grid lg:grid-cols-4">

          <div className="grid gap-4 lg:col-span-3 lg:border-r lg:border-black lg:px-5">
            <h1 className="font-headFont text-3xl lg:text-5xl">{news.head}</h1>
            <span className="text-sm">Upload: {news.date}</span>
            <hr />
            <p>{news.para1}</p>

            <div className="w-full grid justify-center">
              <div className="relative w-[15rem] md:w-[18rem]">
                <Image src={news.img1} width={0} height={0} alt={news.key} sizes='100vw' className='w-full h-auto' />
                <div className="bg-pink-400 absolute -bottom-2 w-full h-1"></div>
              </div>
              <p className="mt-3 text-sm text-gray-400">source: instagram</p>
            </div>

            <p>{news.para2}</p>

            <div className="w-full grid justify-center">
              <div className="relative w-[15rem] md:w-[18rem]">
                <Image src={news.img3} width={0} height={0} alt={news.key} sizes='100vw' className='w-full h-auto' />
                <div className="bg-pink-400 absolute -bottom-2 w-full h-1"></div>
              </div>
              <p className="mt-3 text-sm text-gray-400">source: instagram</p>
            </div>


            <p>{news.para3}</p>

            <div className="w-full grid justify-center">
              <div className="relative w-[15rem] md:w-[18rem]">
                <Image src={news.img2} width={0} height={0} alt={news.key} sizes='100vw' className='w-full h-auto' />
                <div className="bg-pink-400 absolute -bottom-2 w-full h-1"></div>
              </div>
              <p className="mt-3 text-sm text-gray-400">source: instagram</p>
            </div>

            <p>{news.para4}</p>

            <div className="w-full grid justify-center">
              <div className="relative w-[15rem] md:w-[18rem]">
                <Image src={news.img4} width={0} height={0} alt={news.key} sizes='100vw' className='w-full h-auto' />
                <div className="bg-pink-400 absolute -bottom-2 w-full h-1"></div>
              </div>
              <p className="mt-3 text-sm text-gray-400">source: instagram</p>
            </div>
          </div>

          <div className="w-full h-full lg:px-3 hidden lg:block">

          </div>
        </div>
      </div>
    </section>
  )
}

export default page