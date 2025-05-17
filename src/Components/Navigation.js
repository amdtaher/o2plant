'use client'
import React, { useState } from 'react'
import Link from 'next/link'

const Navigation = () => {
    const [show, setShow] = useState(false)

  return (
    <>
        {/* Navigation Bar */}
        <nav className='relative flex items-center justify-between py-6 md:py-12 text-white/70 md:px-16'>
            <div className='flex items-center justfify-between gap-2 md:gap-3.5'>
                <img src="/images/logo.webp" alt='logo' className='w-10 md:w-12 h-10 md:h-12'/>
                <h4 className='text-xl md:text-3xl font-bold'>o2Plant.</h4>
            </div>
            <ul className={`${show ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-end md:items-center justify-between gap-8 md:gap-14 capitalize bg-[#1a2217] text-white md:text-white/70 md:bg-transparent pl-14 md:pl-0 pr-2 md:pr-0 pt-3 md:pt-0 pb-10 md:pb-0 rounded-2xl md:rounded-none absolute md:static top-6 right-0 z-10 text-2xl md:text-base`}>
                
                {show && (<li><button onClick={()=>{setShow(false)}} className='md:hidden flex items-center justify-center w-7 h-7 border border-white ml-auto rounded-full font-bold'>X</button></li>)}
                
                <li><Link href='#'>home</Link></li>
                <li><Link href='#'>plants type</Link></li>
                <li><Link href='#'>more</Link></li>
                <li><Link href='#'>contact</Link></li>
            </ul>
            <div className='flex items-center justify-between gap-5 md:gap-14 relative'>
                <div className='flex items-center justify-between gap-5 md:gap-14'>
                    <Link href='#'><img src='/images/search.webp' width={'24px'} height={'24px'}/></Link>
                    <Link href='#'><img src='/images/cart0.webp' width={'24px'} height={'24px'}/></Link>
                </div>
                <Link className='md:hidden' href='#' onClick={()=>{setShow(show => !show)}}><img src='/images/menu.webp'/></Link>
            </div>
        </nav>
    </>
  )
}

export default Navigation