"use client"

import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import { RiCloseLine, RiMenuLine } from "@remixicon/react"

const Navbar = () => {

  const toggleMenuShow = () => {
    const menu = document.getElementById("menu-bar");
    menu?.classList.remove("mdnav:right-full");
    menu?.classList.add("mdnav:right-0");
  }

  const toggleMenuHide = () => {
    const menu = document.getElementById("menu-bar");
    menu?.classList.remove("mdnav:right-0");
    menu?.classList.add("mdnav:right-full");
  }

  return (
    <header className="fixed w-full bg-mobileNav1 rounded-b-2xl z-40">
      <nav className="h-[4.5rem] flex justify-between items-center main_container">
        <Link href="/">
          <Image src="/logo.png" width={200} height={150} alt="logo" />
        </Link>

        <div className="mdnav:fixed mdnav:top-0 mdnav:right-full mdnav:bg-gradient-to-r mdnav:from-mobileNav1 mdnav:to-mobileNav2 mdnav:w-full mdnav:h-full mdnav:flex mdnav:justify-center mdnav:items-center mdnav:flex-col mdnav:transition-all mdnav:duration-500" id="menu-bar">
          <ul className="flex gap-10 flex-col items-center md:flex-row md:gap-6 xl:gap-8">
            {NAV_LINKS.map((link) => (
              <li>
                <Link href={link.href} key={link.key} className="font-navFont uppercase text-2xl md:text-sm lg:text-lg" onClick={toggleMenuHide}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="absolute top-5 right-7 md:hidden cursor-pointer" onClick={toggleMenuHide}>
            <RiCloseLine size={35} />
          </div>
        </div>

        <RiMenuLine size={25} className="md:hidden cursor-pointer" onClick={toggleMenuShow} />
      </nav>
    </header>
  )
}

export default Navbar