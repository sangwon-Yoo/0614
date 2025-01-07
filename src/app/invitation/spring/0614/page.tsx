"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { SwiperContainer } from 'swiper/element';

export default function Page0614() {

  const [transparentDim, setTransparentDim] = useState(false);
  const [displayDim, setDisplayDim] = useState(true);
  const [allowSlidePrev, setAllowSlidePrev] = useState(true);
  const [allowSlideNext, setAllowSlideNext] = useState(true);

  useEffect(() => {
    setTransparentDim(true);
    setTimeout(() => setDisplayDim(false), 2000);
  }, []);

  const blockSwipeOnEdge = useCallback((swiper: SwiperContainer['swiper']) => {
    if(swiper.activeIndex == 0) {
      setAllowSlidePrev(false);
    } else if(swiper.activeIndex == swiper.slides.length - 1) {
      setAllowSlideNext(false);
    } else {
      setAllowSlidePrev(true);
      setAllowSlideNext(true);
    }
  }, []);

  return (
    <>
      <div
        className={`${displayDim ? 'block' : 'hidden'} fixed z-50 inset-0 transition-opacity ease-linear delay-1000 duration-1000 bg-white ${transparentDim ? 'opacity-0' : ''}`}
        aria-hidden={true}
      />
      <Swiper
        allowSlidePrev={allowSlidePrev}
        allowSlideNext={allowSlideNext}
        direction={'vertical'}
        resistance={false}
        slidesPerView={1}
        onSlideChange={(swiper) => blockSwipeOnEdge(swiper)}
        onSwiper={(swiper) => blockSwipeOnEdge(swiper)}
        className={'h-full'}
      >
        <SwiperSlide>
          <div className={'relative h-full'}>
            <div className={'relative h-full'}>
              <Image
                fill={true}
                src="/gallery/main.jpg"
                sizes="(max-width: 640px) 100vw"
                alt={'메인 사진'}
                className={'object-cover'}
              />
              <div
                className={'absolute h-full w-full bg-gradient-to-t from-[#000000AA] via-transparent via-25%'}
                aria-hidden={true}
              />
            </div>
            <div className={'absolute flex justify-center items-center w-full top-12'}>
              <span className={'font-greatVibes text-white text-4xl'}>
                {`We're getting married.`}
              </span>
            </div>
            <div className={'absolute text-lg font-medium w-full flex flex-col items-center bottom-20 text-white'}>
              <div>허현정 &#x2665; 유상원</div>
              <div>2025년 6월 14일</div>
              <div>엘리에나 호텔, 3F, 임페리얼 홀</div>
            </div>
          </div>
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
