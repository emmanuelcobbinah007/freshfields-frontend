import React from 'react'
import about1 from '../../assets/images/about1.jpg'
import about2 from '../../assets/images/about2.jpg'
import { StaticImageData } from 'next/image'

const About = () => {
  return (
    <div className='w-[85%] mx-auto pb-8'>
        <h1 className='font-medium text-3xl text-center py-8'>About Fresh Fields</h1>
        <hr
             className="w-[50%] mx-auto mt-1 mb-8 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100"
            />
        <div>
        <div className='font-medium text-xl text-center py-4'>Seed to Harvest</div>
        <div className='grid grid-cols-4'>
            <div className='px-8 col-span-2 flex'>
                <img className='justify-center mx-auto rounded shadow-2xl' src={(about1 as StaticImageData).src} />
            </div>
            <div className='p-8 col-span-2 my-auto'>
                <p>
                Every great harvest begins with a single seed. At Fresh Fields, we work hand-in-hand with farmers who pour their passion into the soil, ensuring every product starts its journey with care and intention. By promoting sustainable farming practices and empowering local communities, we’re committed to cultivating a future where nature and innovation thrive together.
                </p>
            </div>
        </div>
        </div>

        <div>
        <div className='grid grid-cols-5'>
                <div className='p-8 col-span-2 my-auto'>
                <div className='font-medium text-xl text-center py-4'>
            Nurtured with Care
        </div>
                    <p>
                    From the fields to your table, every step of the journey is guided by dedication and precision. Our partner farmers nurture their crops with the utmost care, combining traditional expertise with modern techniques to deliver produce that’s as fresh as it is flavorful. With us, you’re not just buying a product—you’re supporting a process rooted in quality and integrity.    
                    </p>
                </div>
                <div className='px-8 col-span-3'>
                <img className='rounded h-[400px] shadow-2xl' src={(about2 as StaticImageData).src} />
            </div>
        </div>
        </div>

    </div>
  )
}

export default About