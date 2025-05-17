import React from 'react'

const page = () => {

  const feedbacks = [
    {
      id: 1,
      name: 'jason statham',
      stars: '*****',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
      img: '/images/review-img1.webp',
    },
    {
      id: 2,
      name: 'molina collins',
      stars: '*****',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
      img: '/images/review-img2.webp',
    },
    {
      id: 3,
      name: 'edge stingson',
      stars: '*****',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
      img: '/images/review-img3.webp',
    }
  ]

  return (
    <>
      {/* Feedbacks */}
      <div className='flex flex-col items-center justify-between gap-32 py-12 md:px-16 mx-5 md:mx-0'>
        {/* Title */}
        <div className='relative md:mb-10'>
            {/* Left corner */}
            <span className="absolute left-0 md:-left-6 top-10 -translate-y-1/2 w-8 h-10 border-l-4 border-b-4 rounded-bl-[10px] border-[#55B000]"></span>
            <h4 className='text-5xl font-medium text-center capitalize'>customer reviews</h4>
            {/* Right corner */}
            <span className="absolute right-0 md:-right-6 top-2 -translate-y-1/2 w-8 h-10 border-r-4 border-t-4 rounded-tr-[10px] border-[#55B000]"></span>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
            {/* Single Feedbacks */}
            {feedbacks.map( feed => (
              <div key={feed.id} className='flex flex-col items-start justify-between gap-6 px-5 py-8 md:py-12 bg-white/5 backdrop-blur-[10.1px] border border-white/40 border-r-white/20 border-t-0 rounded-[45px]'>
                <div className='flex items-center justify-between gap-5'>
                  <img className='rounded-full w-[70px] h-[70px] leading-1 object-cover' src={feed.img}/>
                  <h4 className='flex flex-col items-start justify-between text-3xl capitalize'>{feed.name} <b>{feed.stars}</b></h4>
                </div>
                <p className='text-white/70 text-sm md:text-lg'>{feed.review}</p>
              </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default page