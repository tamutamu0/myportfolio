import React from 'react'
// import Link from "next/link";
import { SiDatadog } from 'react-icons/si'
import ChangeThemeButton from './ChangeThemeButton'
import Mydog from '../public/mydog.jpeg'

const Header = () => {

    return (
        <div>
            {/* <nav className="flex flex-rows p-2 bg-red-500 text-white ">
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/about">
                    <a>About </a>
                </Link>
            </nav> */}
            <nav className='flex items-center justify-between bg-teal-500 p-6'>
                <div className='flex items-center mr-6 text-gray-900'>
                    {/* <SiDatadog className='fill-current h-10 w-10 mr-3' /> */}
                    <img src="/mydog.jpeg" alt="My Dog" className='object-cover h-10 w-10 rounded-full mr-3'/>
                    <span className='font-semibold text-l'>Yukinobu Tamura’s Portfolio</span>
                </div>
                <div>
                    <ChangeThemeButton />
                </div>
            </nav>
        </div>
    )
}

export default Header
