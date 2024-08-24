import { LEGAL, NAV_LINKS, SOCIAL } from "@/constants"
import { RiArrowRightSLine, RiFacebookCircleLine, RiInstagramLine, RiPinterestLine } from "@remixicon/react"
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-navColor rounded-t-xl py-14">
      <div className="main_container">
        <div className="grid gap-5 md:grid-cols-4">
          <div className="flex flex-col gap-1">
            <Image src="/logo.png" width={200} height={70} alt="logo" />
            <p className="text-sm text-gray-600">Unveiling the Glamour of Today's Leading Ladies</p>
          </div>

          <div>
            <h3 className="font-mainFont font-600">CONTENT</h3>
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.key} >
                  <Link href={link.href} className="inline-flex hover:text-pink-700 items-center duration-300">
                    <RiArrowRightSLine size={15} />{link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mainFont font-600">LEGAL</h3>
            <ul>
              {LEGAL.map((link) => (
                <li key={link.key}>
                  <Link href={link.href} className="inline-flex hover:text-pink-700 items-center duration-300">
                    <RiArrowRightSLine size={15} />{link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mainFont font-600">SOCIAL</h3>
            <ul className="flex gap-3">
              <li>
                <Link href="" className="hover:text-pink-700 duration-300"><RiFacebookCircleLine /></Link>
              </li>
              <li>
                <Link href="" className="hover:text-pink-700 duration-300"><RiInstagramLine /></Link>
              </li>
              <li>
                <Link href="" className="hover:text-pink-700 duration-300"><RiPinterestLine /></Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-7 text-center text-sm">
          <p>&copy; 2024 Divas Daily, All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer