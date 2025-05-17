'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Image from 'next/image';
import plant from '@/public/images/hero-img.png';

const page = () => {
  const cards = [
    {
      id: 1,
      tag: "Trendy House Plant",
      name: "Calathea plant",
      image: plant,
    },
    {
      id: 2,
      tag: "Stylish Home Decor",
      name: "Snake Plant",
      image: plant,
    },
    {
      id: 3,
      tag: "Fresh Air Plant",
      name: "ZZ Plant",
      image: plant,
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row items-start justify-between gap-20 py-12 px-6 text-white">
      {/* Hero Text */}
      <div className="flex-1 flex flex-col gap-10">
        <div>
          <h2 className="lg:text-[90px] xl:text-[105px] font-semibold capitalize">breath natural</h2>
          <p className="max-w-[60ch] xl:max-w-[66ch] text-lg mb-5 text-white/70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex items-start gap-6 text-white/70">
            <a className="text-xl capitalize border-white border-2 rounded-xl px-12 py-3" href="#">
              explore
            </a>
            <a className="flex items-center gap-4" href="#">
              <img src="/images/play.png" alt="play" />
              live demo
            </a>
          </div>
        </div>

        <div className="max-w-[400px] p-10 bg-white/5 backdrop-blur-[10.1px] border border-white/40 border-r-white/20 rounded-[45px]">
          <div className="flex items-center gap-5 mb-4">
            <img src="/images/hero-review-img.png" />
            <div>
              <h4>alena maximoff</h4>
              <b>★★★★★</b>
            </div>
          </div>
          <p className="text-white/70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...
          </p>
        </div>
      </div>

      {/* Swiper Section */}
      <div className="flex-1 max-w-[420px]">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 3000 }}
          spaceBetween={20}
          slidesPerView={1}
        >
          {cards.map((card) => (
            <SwiperSlide key={card.id}>
              <div className='w-full max-w-[420px] h-dvh flex flex-col justify-between pb-16 bg-white/5 backdrop-blur-[12.5px] border border-white/20 shadow-[0px_9px_18.4px_rgba(0,0,0,0.25)] rounded-[70px] p-6 text-white/70'>
                <image className='-mt-28 mx-auto' src={card.image} alt={card.name}/>
                <div className='flex flex-col capitalize pl-10 pt-5'>
                  <h4 className='text-2xl'>{card.tag}</h4>
                  <h2 className='text-4xl my-3'>{card.name}</h2>
                  <a className='w-[200px] text-3xl border-1 border-white rounded-xl px-8 py-3.5 mt-2' href='#'>buy now</a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default page;
