"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { SwiperContainer } from 'swiper/element';
import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';

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
              <ReactTyped
                className={'text-center font-greatVibes drop-shadow-md text-white text-4xl'}
                strings={[`We're getting married.`]}
                typeSpeed={25}
                contentType={'html'}
                startDelay={1500}
                showCursor={false}
              />
            </div>

            <div className={'absolute text-lg font-medium w-full flex flex-col items-center bottom-20 text-white'}>
              <div>허현정 &#x2665; 유상원</div>
              <div>2025년 6월 14일</div>
              <div>엘리에나 호텔, 3F, 임페리얼 홀</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={'relative h-full flex flex-col'}>
            <div className={'flex flex-col justify-center items-center flex-none h-24'}>
              <span className={'font-greatVibes text-lg'}>Welcome</span>
            </div>
            <div className={'flex flex-col flex-1'}>
              <div className={'flex-auto'}>
                <p className={'whitespace-nowrap text-center leading-8 mb-6'}>
                  {'저희 두 사람이'}<br />
                  {'평생을 함께하기 위해'}<br />
                  {'서로의 반려자가 되려 합니다.'}<br />
                </p>
                <p className={'whitespace-nowrap text-center leading-8 mb-6'}>
                  {'그 진실 서약을 하는 자리에'}<br />
                  {'소중한 분들을 모십니다.'}<br />
                </p>
                <div className={'flex flex-row justify-center'}>
                  <p className={'whitespace-nowrap mb-6 flex-none w-48 leading-7'}>
                    <span className={'font-bold'}>{' 유 진 재 '}</span>
                    &#183;
                    <span className={'font-bold'}>{' 윤 혜 정 '}</span>
                    {'의 아들'}
                    <br />
                    <span className={'font-bold'}>{' 허 만 인 '}</span>
                    &#183;
                    <span className={'font-bold'}>{' 이 정 자 '}</span>
                    {'의 딸'}
                  </p>
                  <p className={'whitespace-nowrap mb-6 flex-none w-14 leading-7'}>
                    <span className={'font-bold'}>{' 유 상 원 '}</span>
                    <br />
                    <span className={'font-bold'}>{' 허 현 정 '}</span>
                  </p>
                </div>
              </div>
              <div className={'flex-auto'}></div>
            </div>
          </div>
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
