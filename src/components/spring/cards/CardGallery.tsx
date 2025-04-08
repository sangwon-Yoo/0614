import Image from 'next/image';
import { Dispatch, SetStateAction, useCallback, useEffect, useMemo, useState } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import { SwiperContainer } from 'swiper/element';
import { motion } from 'framer-motion';

export default function CardGallery({currentSlideIndex}: {currentSlideIndex: number}) {

  const [isPopGallery, setIsPopGallery] = useState<boolean>(false);
  const [initGallerySwiperIndex, setInitGallerySwiperIndex] = useState(0);
  const swiper = useSwiper();
  const openGallerySwiper = useCallback((initIndex: number) => {
    setIsPopGallery(true);
    setInitGallerySwiperIndex(initIndex);
  }, []);

  useEffect(() => {
    if(isPopGallery) {
      swiper.disable();
    }
    else {
      swiper.enable();
    }
  }, [isPopGallery, swiper]);

  const photoList = useMemo(() => [
    '/gallery/cards/01.png',
    '/gallery/cards/02.png',
    '/gallery/cards/03.png',
    '/gallery/cards/04.png',
    '/gallery/cards/05.png',
    '/gallery/cards/06.png',
    '/gallery/cards/07.png',
    '/gallery/cards/08.png',
    '/gallery/cards/09.png',
    '/gallery/cards/10.png',
    '/gallery/cards/11.png',
    '/gallery/cards/12.png',
    '/gallery/cards/13.png',
    '/gallery/cards/14.png',
    '/gallery/cards/15.png',
    '/gallery/cards/16.png',
    '/gallery/cards/17.png',
    '/gallery/cards/18.png',
    '/gallery/cards/19.png',
    '/gallery/cards/20.png',
    '/gallery/cards/21.png',
    '/gallery/cards/22.png',
    '/gallery/cards/23.png',
    '/gallery/cards/24.png',
    '/gallery/cards/25.png',
    '/gallery/cards/26.png',
    '/gallery/cards/27.png',
    '/gallery/cards/28.png',
    '/gallery/cards/29.png',
    '/gallery/cards/30.png',
  ], []) ;


  return (
    <div className={'relative h-full flex flex-col'}>
      <div
        className={'flex flex-col justify-center items-center flex-none h-24'}
      >
        <span className={'font-greatVibes text-lg'}>Gallery</span>
      </div>
      <div className={'flex flex-col flex-1'}>
        <div className={'my-6'}>
          <motion.p
            className={'text-center'}
            key={`gallery-0-${currentSlideIndex}`}
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            사진을 눌러 보세요.
          </motion.p>
        </div>
        <div
          className={'grid grid-rows-4 grid-flow-col auto-cols-min gap-3 flex-1 ml-3 mt-5 mb-8 overflow-auto after:fixed after:left-3/4 after:h-full after:w-1/4 after:bg-gradient-to-r after:from-transparent after:to-slate-100 after:pointer-events-none'}
        >
          {photoList.map((photo, index) => (
            <button onClick={() => openGallerySwiper(index)} className={'relative row-span-2 w-[150px]'} key={index}>
              <Image
                fill={true}
                src={photo}
                sizes="(max-width: 640px) 100vw, 640px"
                alt={`갤러리 미리보기 ${index + 1}`}
                className={'object-cover rounded-md'}
              />
            </button>
          ))}
        </div>

      </div>

      {isPopGallery && <GalleryPop photoList={photoList} initIndex={initGallerySwiperIndex} onClose={() => setIsPopGallery(false)} />}
    </div>
  );
}

type Swiper = SwiperContainer['swiper'] | null;

function GalleryPop({photoList, initIndex, onClose}: {
  photoList: Array<string>;
  initIndex: number;
  onClose: () => void;
}) {

  const [isTransparentModal, setIsTransparentModal] = useState(true);

  const [swiperIndex, setSwiperIndex] = useState<number>(initIndex);
  const [mainSwiper, setMainSwiper] = useState<Swiper>(null);
  const [thumbSwiper, setThumbSwiper] = useState<Swiper>(null);

  useEffect(() => {
    if(mainSwiper && mainSwiper.activeIndex !== swiperIndex) {
      mainSwiper.slideTo(swiperIndex);
    }
    if(thumbSwiper && thumbSwiper.activeIndex !== swiperIndex) {
      thumbSwiper.slideTo(swiperIndex);
    }
  }, [swiperIndex, mainSwiper, thumbSwiper]);

  useEffect(() => {
    setIsTransparentModal(false);
  }, []);

  return (
    <div
      className={`fixed z-50 inset-0 transition-opacity ease-linear duration-200 bg-black ${isTransparentModal ? 'opacity-0' : 'opacity-100'}`}
    >
      <div className={'flex flex-col h-full'}>
        <div className={'flex justify-between flex-initial h-[8%]'}>
          <div className={'flex justify-center items-center flex-initial w-24'}>
            <span className={'text-white'}>{`${swiperIndex + 1} / ${photoList.length}`}</span>
          </div>
          <div className={'flex justify-center items-center flex-initial w-16'}>
            <button
              className={'text-white'}
              onClick={onClose}
            >
              닫기
            </button>
          </div>
        </div>
        <div className={'flex-initial h-[80%]'}>
          <SwiperGalleryCards
            photoList={photoList}
            initIndex={initIndex}
            setSwiper={setMainSwiper}
            setSwiperIndex={setSwiperIndex}
          />
        </div>
        <div className={'flex-initial h-[12%] px-2 py-2 min-h-20'}>
          <SwiperGalleryThumb
            photoList={photoList}
            initIndex={initIndex}
            setSwiper={setThumbSwiper}
            swiperIndex={swiperIndex}
            setSwiperIndex={setSwiperIndex}
          />
        </div>
      </div>
    </div>
  );
}

function SwiperGalleryCards({photoList, initIndex, setSwiper, setSwiperIndex}: {
  photoList: Array<string>;
  initIndex: number;
  setSwiper: Dispatch<SetStateAction<Swiper>>;
  setSwiperIndex: Dispatch<SetStateAction<number>>;
}) {

  const swiperSlideList = photoList.map((photo, index) => {

    return (
      <SwiperSlide key={index}>
        <div className={'relative h-full'}>
          <Image
            fill={true}
            src={photo}
            sizes="(max-width: 640px) 100vw, 640px"
            alt={`갤리리 사진 ${index}`}
            className={'object-contain'}
          />
        </div>
      </SwiperSlide>
    );
  });

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={24}
      initialSlide={initIndex}
      onSwiper={(swiper) => setSwiper(swiper)}
      onSlideChange={swiper => setSwiperIndex(swiper.activeIndex)}
      className={'h-full'}
    >
      {swiperSlideList}
    </Swiper>
  );
}

function SwiperGalleryThumb({photoList, initIndex, setSwiper, swiperIndex, setSwiperIndex}: {
  photoList: Array<string>;
  initIndex: number;
  setSwiper: Dispatch<SetStateAction<Swiper>>;
  swiperIndex: number;
  setSwiperIndex: Dispatch<SetStateAction<number>>;
}) {

  const swiperSlideList = photoList.map((photo, index) => {

    return (
      <SwiperSlide key={index} className={'!w-11'}>
        <SwiperSlideThumbContents src={photo} swiperIndex={swiperIndex} index={index} />
      </SwiperSlide>
    );
  });

  return (
    <Swiper
      slidesPerView={'auto'}
      centeredSlides={true}
      resistance={false}
      slideToClickedSlide={true}
      spaceBetween={4}
      initialSlide={initIndex}
      speed={1000}
      onSwiper={(swiper) => setSwiper(swiper)}
      onSlideChange={swiper => setSwiperIndex(swiper.activeIndex)}
      className={'h-full'}
    >
      {swiperSlideList}
    </Swiper>
  );
}

function SwiperSlideThumbContents({src, swiperIndex, index}: {
  src: string;
  swiperIndex: number;
  index: number;
}) {

  return (
    <div className={`flex flex-col justify-center items-center relative h-full`}>
      <Image
        src={src}
        width={44}
        height={66}
        alt={`갤리리 썸네일 ${index}`}
        className={`rounded-[4px] ${swiperIndex == index ? 'border-2 border-amber-100' : 'border-2 border-transparent'}`}
      />
    </div>
  );
}