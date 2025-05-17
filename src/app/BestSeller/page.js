import React from 'react'
import Image from 'next/image';

const Page = () => {

  let plants = [
  {
    id: 1,
    name: 'Calathea plantllo',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    price: 'bdt. 330/-',
    img: '/images/plant1.webp'
  },
  {
    id: 2,
    name: 'Calathea plantllo',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    price: 'bdt. 330/-',
    img: '/images/plant2.webp'
  },
  {
    id: 3,
    name: 'Calathea plantllo',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    price: 'bdt. 330/-',
    img: '/images/plant3.webp'
  },
  {
    id: 4,
    name: 'Calathea plantllo',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    price: 'bdt. 330/-',
    img: '/images/plant4.webp'
  },
  {
    id: 5,
    name: 'Calathea plantllo',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    price: 'bdt. 330/-',
    img: '/images/plant5.webp'
  },
  {
    id: 6,
    name: 'Calathea plantllo',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    price: 'bdt. 330/-',
    img: '/images/plant6.webp'
  },
]

  return (
    <>
      {/* Top Selling Plants */}
      <div className='flex flex-col items-center justify-between gap-32 py-12 md:px-16 mx-5 md:mx-0'>
        {/* Title */}
        <div className='relative mb-10'>
            {/* Left corner */}
            <span className="absolute left-0 sm:-left-6 top-10 -translate-y-1/2 w-8 h-10 border-l-4 border-b-4 rounded-bl-[10px] border-[#55B000]"></span>
            <h4 className='text-5xl font-medium text-center capitalize'>top selling plants</h4>
            {/* Right corner */}
            <span className="absolute right-0 sm:-right-6 top-2 -translate-y-1/2 w-8 h-10 border-r-4 border-t-4 rounded-tr-[10px] border-[#55B000]"></span>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 md:gap-y-30 gap-5 md:gap-10 mt-0 md:mt-10'>
          {/* Single Plant */}
          {plants.map( plant => (
            <div key={plant.id} className='bg card-bg rounded-[50px] lg:max-w-lg flex flex-col justify-center text-white/70 px-5 md:px-0 pt-10 pb-16'>
              <Image className='-mt-24 md:-mt-32' src={plant.img}/>
              <div className='flex flex-col capitalize pl-0 md:pl-10'>
                <h2 className='text-4xl md:text-5xl font-semibold my-3'>{plant.name}</h2>
                <p className='text-base md:text-xl max-w-[30ch] my-4'>{plant.text}</p>
                <div className='flex items-center justify-between gap-2 md:pr-10 md:gap-8'>
                  <h4 className='text-2xl md:text-4xl text-center' href='#'>{plant.price}</h4>
                  <a href='#'><Image className='opacity-60 w-2/3 md:w-full' src='/images/cart.webp'/></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Page
