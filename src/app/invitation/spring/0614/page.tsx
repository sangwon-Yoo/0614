"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Page0614() {
  return (
    <Swiper
      direction={'vertical'}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className={'h-screen'}
    >
      <SwiperSlide>
        <div  className={'h-full bg-amber-100'}>11111</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={'h-full bg-amber-200'}>2222</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={'h-full bg-amber-100'}>3333</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={'h-full bg-amber-100'}>4444</div>
      </SwiperSlide>
    </Swiper>
  );
}
