import React from 'react'
import Link from 'next/link'
import logo from '../../assets/images/Logo-Dark.png'
import { StaticImageData } from 'next/image'

const Footer = () => {
  return (
    <div className='bg-black'>
        <div className='w-[70%] mx-auto text-white'>
        <div className='grid grid-cols-3 py-10'>
        <div className='col-span-1 my-6'>
        <Link href='/' passHref>
        <img src={(logo as StaticImageData).src} alt='logo' className='h-7 my-2' />
        </Link>
        <p className='text-xs text-gray-400 py-2'>Harvesting Freshness, Delivering Quality</p>
        </div>
        <div className='col-span-2 my-6 flex'>
            <div className='mx-16'>
                <h1 className='pb-3'>My Account</h1>
                <p className='text-xs text-gray-400 py-2 hover:text-white hover:cursor-pointer duration-200'>My Account</p>
                <p className='text-xs text-gray-400 py-2 hover:text-white hover:cursor-pointer duration-200'>Order History</p>
                <p className='text-xs text-gray-400 py-2 hover:text-white hover:cursor-pointer duration-200'>Shopping Cart</p>
                <p className='text-xs text-gray-400 py-2 hover:text-white hover:cursor-pointer duration-200'>Wishlist</p>
            </div>
            <div className='mx-16'>
                <h1 className='pb-3'>Helps</h1>
                <p className='text-xs text-gray-400 py-2 hover:text-white hover:cursor-pointer duration-200'>Contact</p>
                <p className='text-xs text-gray-400 py-2 hover:text-white hover:cursor-pointer duration-200'>FAQs</p>
                <p className='text-xs text-gray-400 py-2 hover:text-white hover:cursor-pointer duration-200'>Terms and Conditions</p>
                <p className='text-xs text-gray-400 py-2 hover:text-white hover:cursor-pointer duration-200'>Privacy Policy</p>
            </div>

        </div>
        </div>
        </div>
        
    </div>
  )
}

export default Footer