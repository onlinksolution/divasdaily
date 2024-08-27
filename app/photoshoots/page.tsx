import { PHOTOSHOOT } from "@/constants"
import Image from "next/image"
import Link from "next/link"

const page = () => {

  return (
    <section className='py-24'>
      <div className='main_container grid gap-10'>
        <h2 className='font-decFont text-white text-5xl text-center -rotate-6'>Photoshoots <br /> <p className='text-xl font-decFont'>Diva's Photoshoots Collection</p></h2>

        <div className='md:grid md:grid-cols-5'>
          <div className='md:col-span-4'>
            <div className='grid md:grid-cols-3'>
              {PHOTOSHOOT.map((link) => (
                <Link href={`/photoshoots/${link.key}`} className='group' key={link.key}>
                  <article className='p-3 transition-all duration-300 group-hover:bg-white/90 group-hover:rounded-2xl' key={link.key}>
                    <div className='grid gap-3'>
                      <Image src={link.mainImg} width={0} height={0} sizes='100vw' alt='news' className='rounded-2xl w-full h-auto' />

                      <h3 className='group-hover:text-black text-white'>{link.title}</h3>
                      <span className="text-[0.65rem] -mt-3 group-hover:text-black text-white">Uploaded: {link.date}</span>

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
  )
}

export default page