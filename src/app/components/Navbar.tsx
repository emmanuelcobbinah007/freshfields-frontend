import React from 'react'
import logo from '../../assets/images/Logo.png'
import Link from 'next/link';
import { StaticImageData } from 'next/image'
import { CiSearch, CiHeart, CiUser, CiShoppingBasket } from "react-icons/ci";
import { TfiAngleDown } from "react-icons/tfi";

const Navbar = () => {
  return (
    <div className=' bg-white'>
        <div className='w-[80%] mx-auto'>
        <div className='flex justify-between items-center py-4'>
        <Link href='/' passHref>
        <img src={(logo as StaticImageData).src} alt='logo' className='h-7' />
        </Link>
        <div className='flex items-center'>
            <Link href='/'>
            <p className='px-3 flex items-center hover:text-[#489706] hover:cursor-pointer duration-300 hover:scale-105'>Home</p>
            </Link>
            <p className='px-3 flex items-center hover:text-[#489706] hover:cursor-pointer duration-300 hover:scale-105'>Shop</p>
            <p className='px-3 flex items-center hover:text-[#489706] hover:cursor-pointer duration-300 hover:scale-105'>Work With Us</p>
            <p className='px-3 flex items-center hover:text-[#489706] hover:cursor-pointer duration-300 hover:scale-105'>About Us</p>
        </div>
        <div className='flex items-center'>
           <CiSearch size={27} className='mx-[5px] hover:bg-gray-200 cursor-pointer rounded-[50%] p-1 duration-300'/>
           <CiHeart size={27} className='mx-[5px] hover:bg-gray-200 cursor-pointer rounded-[50%] p-1 duration-300'/>
          <Link href='/sign-in'>
          <CiUser size={27} className='mx-[5px] hover:bg-gray-200 cursor-pointer rounded-[50%] p-1 duration-300'/></Link>
           <CiShoppingBasket size={27} className='mx-[5px] hover:bg-gray-200 cursor-pointer rounded-[50%] p-1 duration-300'/>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Navbar