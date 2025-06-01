import React from 'react'
import Image from 'next/image';

const Page = () => {
  return (
    <>
    {/* Trendy Plants */}
      <div className='flex flex-col items-center justify-between gap-32 py-12 md:px-16 mx-5 md:mx-0'>
        {/* Title */}
        <div className='relative mb-10'>
            {/* Left corner */}
            <span className="absolute left-0 md:-left-6 top-10 -translate-y-1/2 w-8 h-10 border-l-4 border-b-4 rounded-bl-[10px] border-[#55B000]"></span>
            <h4 className='text-5xl font-medium text-center capitalize'>our trendy plants</h4>
            {/* Right corner */}
            <span className="absolute right-0 md:-right-6 top-2 -translate-y-1/2 w-8 h-10 border-r-4 border-t-4 rounded-tr-[10px] border-[#55B000]"></span>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-32 sm:gap-10 md:gap-32'>
          {/* Single Plant */}
          <div className='w-full grid grid-cols-1 md:grid-cols-2 items-center px-10 pb-10 md:pb-0 bg-white/5 backdrop-blur-[10.1px] border border-white/40 border-r-white/20 rounded-[50px] md:rounded-[150px] capitalize'>
            {/* Plant Image */}
            <Image className='-mt-30 md:-mt-44' src='/images/trendy-plant1.webp' width={877} height={877} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt='Trendy Plant Image'/>
            {/* Plant Info */}
            <div className='flex flex-col items-start justify-between gap-2.5 md:py-5'>
              <h4 className='text-2xl md:text-3xl font-medium'>for small desc ai flat</h4>
              <p className='text-base md:text-xl my-6 md:my-3 max-w-[65ch]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <h4 className='text-3xl font-medium'>bdt. 599/-</h4>
              <div className='flex items-center justify-start gap-2 md:gap-8 mt-6'>
                <a className='text-2xl md:text-3xl text-center border-2 border-white rounded-xl px-12 py-3.5' href='#'>explore</a>
                <a href='#'><Image src='/images/cart.webp' width={60} height={60} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt='cart'/></a>
              </div>
            </div>
          </div>

          {/* Single Plant */}
          <div className='w-full grid grid-cols-1 md:grid-cols-2 items-center px-10 pt-10 md:pt-0 bg-white/5 backdrop-blur-[10.1px] border border-white/40 border-r-white/20 rounded-[50px] md:rounded-[150px] capitalize'>
            {/* Plant Image */}
            <Image className='order-1 md:order-2 -mt-30 md:-mt-44' src='/images/trendy-plant2.webp' width={877} height={877} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt='Trendy Plant Image'/>
            {/* Plant Info */}
            <div className='order-2 md:order-1 flex flex-col items-start justify-between gap-2.5 md:pl-16 pb-10 md:pb-5 md:pt-5'>
              <h4 className='text-2xl md:text-3xl font-medium'>for small desc ai flat</h4>
              <p className='text-base md:text-xl my-6 md:my-3 max-w-[65ch]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <h4 className='text-3xl font-medium'>bdt. 599/-</h4>
              <div className='flex items-center justify-start gap-2 md:gap-8 mt-6'>
                <a className='text-2xl md:text-3xl text-center border-2 border-white rounded-xl px-12 py-3.5' href='#'>explore</a>
                <a href='#'><Image src='/images/cart.webp' width={60} height={60} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt='cart'/></a>
              </div>
            </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Page