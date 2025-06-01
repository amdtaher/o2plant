'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image';

const Navigation = () => {
    const [show, setShow] = useState(false)

  return (
    <>
        {/* Navigation Bar */}
        <nav className='relative flex items-center justify-between py-6 md:py-12 text-white/70 md:px-16'>
            <div className='flex items-center justfify-between gap-2 md:gap-3.5'>
                <Image src="/images/logo.webp" width={48} height={48} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt='logo'/>
                <h4 className='text-xl md:text-3xl font-bold'>o2Plant.</h4>
            </div>
            <ul className={`${show ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-end md:items-center justify-between gap-8 md:gap-14 capitalize bg-[#ddd] text-[#1a2217] md:text-white/70 md:bg-transparent pl-16 md:pl-0 pr-2 md:pr-0 pt-3 md:pt-0 pb-10 md:pb-0 rounded-2xl md:rounded-none absolute md:static top-6 right-0 z-10 text-2xl md:text-base font-semibold`}>
                
                {show && (<li><button onClick={()=>{setShow(false)}} className='md:hidden flex items-center justify-center w-7 h-7 border-2 border-[#1a2217] ml-auto rounded-full font-bold'>X</button></li>)}
                
                <li><Link href='#'>home</Link></li>
                <li><Link href='#'>plants type</Link></li>
                <li><Link href='#'>more</Link></li>
                <li><Link href='#'>contact</Link></li>
            </ul>
            <div className='flex items-center justify-between gap-5 md:gap-14 relative'>
                <div className='flex items-center justify-between gap-5 md:gap-14'>
                    <Link href='#'><Image src='/images/search.webp' width={24} height={24} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt='search'/></Link>
                    <Link href='#'><Image src='/images/cart0.webp' width={24} height={24} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt='cart'/></Link>
                </div>
                <Link className='md:hidden' href='#' onClick={()=>{setShow(show => !show)}}><img src='/images/menu.webp' alt='img'/></Link>
            </div>
        </nav>
    </>
  )
}

export default Navigation