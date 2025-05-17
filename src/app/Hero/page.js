'use client'
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/Carousel"

const page = () => {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])
    let plants = [
    {
      id: 1,
      name: 'Calathea plantllo',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      price: 'trendy house plants',
      img: '/images/plant1.webp'
    },
    {
      id: 2,
      name: 'Calathea plantllo',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      price: 'trendy house plants',
      img: '/images/plant2.webp'
    },
    {
      id: 3,
      name: 'Calathea plantllo',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      price: 'trendy house plants',
      img: '/images/plant3.webp'
    },
  ]

  return (
    <>
      <div className='flex flex-col lg:flex-row items-center justify-between gap-20 md:gap-0 py-6 md:py-12 md:px-16'>
        {/* Hero Text */}
        <div className='flex flex-col gap-20 md:gap-30'>
          <div className='flex flex-col items-start justify-between'>
            <h2 className='text-[50px] lg:text-[90px] xl:text-[105px] 2xl:text-[118px] font-semibold capitalize'>breath natural</h2>
            <p className='w-full max-w-[45ch] md:max-w-[60ch] xl:max-w-[66ch] text-sm md:text-lg 2xl:text-2xl mb-5 text-white/70'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className='flex items-start justify-between gap-9 text-white/70'>
              <a className='text-base md:text-xl 2xl:text-3xl capitalize border-white border-2 rounded-xl px-8 md:px-12 2xl:px-16 py-2 md:py-3 2xl:py-3.5' href='#'>explore</a>
              <a className='flex items-center gap-4 text-base md:text-xl 2xl:text-3xl capitalize' href='#'><img src='/images/play.webp' alt='play' className='w-[40px] md:w-[64px]'/> live demo</a>
            </div>
          </div>

          <div className='md:max-w-[450px] flex flex-col items-start justify-between gap-2.5 px-8 py-12 bg-white/5 backdrop-blur-[10.1px] border border-white/40 border-r-white/20 rounded-[45px] mx-5 md:mx-0'>
            <div className='flex items-center justify-between gap-5'>
              <img src='/images/hero-review-img.webp'/>
              <h4 className='flex flex-col items-start justify-between'>alena maximoff <b>*****</b></h4>
            </div>
            <p className='text-white/70 text-sm md:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...</p>
          </div>
        </div>

        {/* Hero Img */}
        <Carousel plugins={[Autoplay({delay: 2000})]} className="w-full max-w-sm md:max-w-lg mr-10">
          <CarouselContent>
            {plants.map((plant, index) => (
              <CarouselItem key={index}>
                <div className="embla" ref={emblaRef}>
                  <div className='embla__container'>
                      <div className='embla__slide bg card-bg flex flex-col items-center justify-center pb-10 md:pb-12 text-white/70 sm:mt-30'>
                        <img className='-mt-24' src={plant.img}/>
                        <div className='relative flex flex-col gap-3 capitalize pt-5 md:pt-10'>
                          <h2 className='text-2xl md:text-4xl font-semibold my-3'>{plant.name}</h2>
                          <h4 className='text-xl md:text-2xl'>{plant.price}</h4>
                          <a className='max-w-[150px] md:max-w-[200px] text-2xl md:text-3xl text-center border-1 border-white rounded-xl py-2 md:py-3.5 mt-2' href='#'>buy now</a>
                          {/* <CarouselPrevious className={`absolute bottom-0 -left-20`}/> */}
                          <CarouselNext className={`absolute bottom-0 -right-20`}/>
                        </div>
                      </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  )
}

export default page
