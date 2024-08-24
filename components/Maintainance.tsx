import Image from 'next/image'

const Maintainance = () => {
  return (
    <div className="pt-[5rem] pb-5 w-full flex flex-col items-center">
      <Image src="/construction.png" width={400} height={400} alt="under constrction" className="animate-pulse" />
      <h2 className="text-white text-center font-mainFont text-2xl">Sorry! <br /> We are Under Maintanance.</h2>
    </div>
  )
}

export default Maintainance