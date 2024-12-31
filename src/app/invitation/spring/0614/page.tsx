"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useEffect, useState } from 'react';

export default function Page0614() {

  const [transparentDim, setTransparentDim] = useState(false);
  const [displayDim, setDisplayDim] = useState(true);

  useEffect(() => {
    setTransparentDim(true);
    setTimeout(() => setDisplayDim(false), 2000);
  }, []);

  return (
    <>
      <div className={`${displayDim ? 'block' : 'hidden'} fixed z-50 inset-0 transition-opacity ease-linear delay-1000 duration-1000 bg-white ${transparentDim ? 'opacity-0' : ''}`} />
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className={'h-full'}
      >
        <SwiperSlide>
          <div  className={''}>11111</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={''}>2222</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={''}>3333</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={''}>4444</div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
