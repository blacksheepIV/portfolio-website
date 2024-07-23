'use client'

import Link from 'next/link'
import { navLinks } from './constants'
import { useState } from 'react'

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-20 z-10 bg-gray-800 bg-opacity-80 mx-auto">
      <div className="container flex flex-wrap p-4  items-center justify-between ">
        {/* <Link href="/" className="cursor-pointer">
          <Image
            src="/images/Foroogh(2).png"
            alt="LOGO"
            width={80}
            height={80}
          />
        </Link> */}
        <div className="logo-placeholder w-[50px]"></div>

        <div className=" w-auto">
          <ul className="flex space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.path}
                  className="block py-2 pl-3 pr-4 text-white sm:text-xl rounded md:p-0 hover:text-indigo-700 cursor-pointer"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
