import React from 'react'
import Link from 'next/link'
import Image from 'next/image';

const Footer = () => {
  return (
    <>
      {/* Footer Section */}
      <div>
        <ul className='grid grid-cols-2 md:grid-cols-4 pl-3 md:pl-16 md:pr-16 py-10 md:py-16 capitalize gap-10'>
          <li className='flex flex-col justify-center items-start gap-2.5 md:text-lg'>
            <Link href='#' className='flex items-center gap-2'>
              <Image src="/images/logo.webp" width={44} height={44} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt='logo'/>
              <h4 className='text-base md:text-xl font-semibold'>o2Plant.</h4>
            </Link>
            <Link href='#' className='opacity-70'>o2plant@gmail.com</Link>
            <Link href='#' className='opacity-70'>north carolina, 31st street, ny</Link>
            <Link href='#' className='opacity-70'>+440 234 683 302</Link>
          </li>
          <li className='flex flex-col justify-center items-start gap-2.5 md:text-lg'>
            <h4 className='text-xl font-semibold capitalize pb-2'>our link's</h4>
            <Link href='#'>home</Link>
            <Link href='#'>about</Link>
            <Link href='#'>products</Link>
            <Link href='#'>contact</Link>
          </li>
          <li className='flex flex-col justify-center items-start gap-2.5 md:text-lg'>
            <h4 className='text-xl font-semibold capitalize pb-2'>our terms</h4>
            <Link href='#'>terms & conditions</Link>
            <Link href='#'>our policy</Link>
            <Link href='#'>latest article</Link>
            <Link href='#'>blog</Link>
          </li>
          <li className='flex flex-col justify-start gap-2.5 md:text-lg overflow-hidden'>            
            <h4 className='text-xl font-semibold capitalize pb-2'>for every update</h4>
            <div className='relative'>
              <input type='text' placeholder='Enter Email' className='block border border-white pl-3 md:pr-30 py-3 rounded-lg' />
              <button className='md:absolute top-0 right-18 bg-white text-black font-bold rounded-md h-1/2 md:h-10/12 px-3 mt-1 uppercase'>subscribe</button>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Footer