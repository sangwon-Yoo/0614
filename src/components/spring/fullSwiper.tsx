'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useCallback, useEffect, useState } from 'react';
import { SwiperContainer } from 'swiper/element';
import CardMain from '@/components/spring/cards/CardMain';
import CardDate from '@/components/spring/cards/CardDate';
import CardWelcome from '@/components/spring/cards/CardWelcome';
import CardGallery from '@/components/spring/cards/CardGallery';
import CardVenue from '@/components/spring/cards/CardVenue';
import CardDetails from '@/components/spring/cards/CardDetails';
import CardBlessings from '@/components/spring/cards/CardBlessings';
import CardEnding from '@/components/spring/cards/CardEnding';
import { KAKAO_APP_KEY } from '@/const/global';
import { DDayInfo } from '@/components/spring/server/initServerData';

export default function FullSwiper({dDayInfo}: {dDayInfo: DDayInfo}) {
  const [transparentDim, setTransparentDim] = useState(false);
  const [displayDim, setDisplayDim] = useState(true);
  const [allowSlidePrev, setAllowSlidePrev] = useState(true);
  const [allowSlideNext, setAllowSlideNext] = useState(true);

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const [isKakaoInitialized, setKakaoInitialized] = useState<boolean>(false);

  useEffect(() => {

    //카카오 SDK 초기화
    if(window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init(KAKAO_APP_KEY);
      setKakaoInitialized(true);
      console.log('kakao has initialized!');
    }


  }, [currentSlideIndex]);

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

  /**
   * tailwind flex 정리(자식속성)
   * flex-none : 유연하지 않다 > 그냥 block, 자체 크기를 가져야함.
   * flex-1 : 항상 유연함 >> 부모 끝까지 늘어나거나, 공간이 부족하면 줄어들기도 한다. > 자체 크기를 안가지도록 한다.
   * flex-initial : 초기 크기를 유지한다.(자체크기를 가진다) 늘어나지 않는다. 단, 공간이 부족해지면 줄어든다! (default)
   * flex-auto : 초기 크기가 유연하게 변한다.(자체크기를 가진다) 늘어나고 줄어들고가 가능하다.
   */

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
        onSlideChange={swiper => {
          setCurrentSlideIndex(swiper.activeIndex);
          blockSwipeOnEdge(swiper);
        }}
        onSwiper={swiper => blockSwipeOnEdge(swiper)}
        className={'h-full'}
      >
        <SwiperSlide>
          <CardMain />
        </SwiperSlide>
        <SwiperSlide>
          <CardWelcome currentSlideIndex={currentSlideIndex} />
        </SwiperSlide>
        <SwiperSlide>
          <CardDate currentSlideIndex={currentSlideIndex} dDayInfo={dDayInfo} />
        </SwiperSlide>
        <SwiperSlide>
          <CardGallery currentSlideIndex={currentSlideIndex} />
        </SwiperSlide>
        <SwiperSlide>
          <CardVenue currentSlideIndex={currentSlideIndex} isKakaoInitialized={isKakaoInitialized} />
        </SwiperSlide>
        <SwiperSlide>
          <CardDetails currentSlideIndex={currentSlideIndex} />
        </SwiperSlide>
        <SwiperSlide>
          <CardBlessings currentSlideIndex={currentSlideIndex} selfSlideIndex={7} />
        </SwiperSlide>
        <SwiperSlide>
          <CardEnding currentSlideIndex={currentSlideIndex} isKakaoInitialized={isKakaoInitialized} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
