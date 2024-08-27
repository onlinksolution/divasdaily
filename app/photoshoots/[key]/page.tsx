import { PHOTOSHOOT } from "@/constants"
import Image from "next/image"
import { notFound } from "next/navigation"
import Photoshoots from "@/components/Photoshoots"

interface PhotoshootProps {
  params: {
    key: string
    index: string
    title: string
    desc: string
    mainImg: string
    img1: string[]
  }
}

const page = ({ params }: PhotoshootProps) => {

  const { key } = params

  const photoshoots = PHOTOSHOOT.find((link) => link.key === key)

  const num = parseInt(String(photoshoots?.index));

  const images = PHOTOSHOOT[num].img1

  if (!photoshoots) {
    notFound()
  }

  return (
    <section className="py-28">
      <div className="main_container">
        <div className="bg-white py-7 px-3 rounded-2xl lg:grid lg:grid-cols-4">

          <div className="grid gap-4 lg:col-span-3 lg:border-r lg:border-black lg:px-5">
            <h1 className="font-headFont text-3xl lg:text-5xl">{photoshoots.title}</h1>
            <span className="text-sm">Upload: {photoshoots.date}</span>
            <hr />
            <p>{photoshoots.desc}</p>

            {images.map((link, i) => (
              <div className="w-full grid justify-center mt-3" key={i}>
                <div className="relative w-[15rem] md:w-[18rem]">
                  <Image src={link} width={0} alt={photoshoots.key} height={0} sizes='100vw' className='w-full h-auto' />
                  <div className="bg-pink-400 absolute -bottom-2 w-full h-1"></div>
                </div>
                <p className="mt-3 text-sm text-gray-400">source: {photoshoots.source}</p>
              </div>
            ))}

          </div>

          <div className="w-full h-full lg:px-3 hidden lg:block">

          </div>


        </div>
      </div>

      <Photoshoots />
    </section>
  )
}

export default page