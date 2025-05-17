'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import useEmblaCarousel from 'embla-carousel-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const page = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const o2 = [
    {
      id: 1,
      img: '/images/o2-plant.webp',
      heading:'We Have Small And Best O2 Plants Collection’s',
      subHeading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua  ',
      subHeading2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
    {
      id: 2,
      img: '/images/plant2.webp',
      heading:'it is our decision to make how do we live without o2',
      subHeading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua  ',
      subHeading2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
    {
      id: 3,
      img: '/images/plant3.webp',
      heading:'the world saver is here at your doorstep',
      subHeading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua  ',
      subHeading2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
    {
      id: 4,
      img: '/images/plant4.webp',
      heading:'kick out the carbon and let the oxizen in your house',
      subHeading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua  ',
      subHeading2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
  ]

  return (
    <>
      {/* O2 Collection */}
      <div className='flex flex-col md:items-center justify-between gap-32 py-12 md:px-16 mx-5 md:mx-0'>
        {/* Title */}
        <div className='relative mb-10'>
            {/* Left corner */}
            <span className="absolute left-0 md:-left-6 top-10 -translate-y-1/2 w-8 h-10 border-l-4 border-b-4 rounded-bl-[10px] border-[#55B000]"></span>
            <h4 className='text-5xl font-medium text-center capitalize'>our best o2</h4>
            {/* Right corner */}
            <span className="absolute right-0 md:-right-6 top-2 -translate-y-1/2 w-8 h-10 border-r-4 border-t-4 rounded-tr-[10px] border-[#55B000]"></span>
        </div>

        {/* o2 Plants */}
        <div className='embla__slide grid grid-cols-1 md:grid-cols-2 items-center px-5 md:px-20 pb-10 md:pb-0 bg-white/5 backdrop-blur-[10.1px] border border-white/40 border-r-white/20 rounded-[50px] md:rounded-[150px] capitalize'>
          {/* Plant Image */}
          <img className='-mt-30 md:-mt-50' src={o2[activeIndex].img}/>

          {/* Plant Info Carousel */}
          <Carousel className="w-full">
            <CarouselContent className={`embla`}>
              {o2.map((plant, index) => (
                <CarouselItem key={index} className={`embla__container`}>
                  {/* Plant Info */}
                  <div className='embla__slide flex flex-col items-center md:items-start justify-between gap-4 sm:gap-8 md:py-5'>
                    <h4 className='text-2xl md:text-3xl font-semibold'>{plant.heading}</h4>
                    <p className='text-base md:text-xl max-w-[65ch]'>{plant.subHeading}</p>
                    <p className='text-base md:text-xl max-w-[65ch]'>{plant.subHeading2}</p>
                    <div className='w-full flex items-center justify-between pr-10 md:pr-36'>
                      <Link className='inline-block text-xl md:text-3xl text-center border-2 border-white rounded-xl px-8 md:px-12 py-3.5' href='#'>explore</Link>
                      <h4 className='relative'>
                        <CarouselPrevious className={`absolute bottom-0 -left-12 border-none`}/>
                        {plant.id}/{o2.length}
                        <CarouselNext className={`absolute bottom-0 -right-12 border-none`}/>
                      </h4>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </>
  )
}

export default page