'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useCallback, useEffect, useState } from 'react';
import { SwiperContainer } from 'swiper/element';
import CardMain from '@/components/spring/CardMain';
import CardDate from '@/components/spring/CardDate';
import CardWelcome from '@/components/spring/CardWelcome';

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
    if (swiper.activeIndex == 0) {
      setAllowSlidePrev(false);
    } else if (swiper.activeIndex == swiper.slides.length - 1) {
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
        onSlideChange={swiper => blockSwipeOnEdge(swiper)}
        onSwiper={swiper => blockSwipeOnEdge(swiper)}
        className={'h-svh'}
      >
        <SwiperSlide>
          <CardMain />
        </SwiperSlide>
        <SwiperSlide>
          <CardWelcome />
        </SwiperSlide>
        <SwiperSlide>
          <CardDate />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
