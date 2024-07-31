import { RiArrowGoForwardLine, RiArrowRightLine } from "@remixicon/react"
import Link from "next/link"


const Hero = () => {
  return (
    <section className="z-20">
      <div className="w-full h-full flex flex-col justify-center items-center absolute z-30 gap-6">
        <h1 className="text-center text-5xl lg:text-7xl font-mainFont text-white font-600">Your ultimate source <br /> for the latest and greatest <br /> in the world of Divas</h1>
        <Link href="/" className="bg-btn py-4 px-6 text-xl rounded-full inline-flex items-center gap-3 hover:bg-bodyColor2 font-navFont hover:text-white duration-300">Expore Now <RiArrowRightLine /></Link>
      </div>
      <div className="overlay"></div>
      <div className="w-full h-full">
        <video src="./hero-video.mp4" autoPlay loop muted className="hero_video" />
      </div>

    </section>
  )
}

export default Hero