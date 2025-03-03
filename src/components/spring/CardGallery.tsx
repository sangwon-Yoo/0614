import Image from 'next/image';
import { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react';
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
        <div className={'grid grid-rows-4 grid-cols-2 grid-flow-col gap-3 flex-1 mx-3 my-8'}>
          <button onClick={() => openGallerySwiper(0)} className={'relative'}>
            <Image
              fill={true}
              src="/gallery/cards/photo-1.jpeg"
              sizes="(max-width: 640px) 100vw, 640px"
              alt={'메인 사진'}
              className={'object-cover rounded-md'}
            />
          </button>
          <button onClick={() => openGallerySwiper(1)} className={'relative row-span-2'}>
            <Image
              fill={true}
              src="/gallery/cards/photo-2.jpeg"
              sizes="(max-width: 640px) 100vw, 640px"
              alt={'메인 사진'}
              className={'object-cover rounded-md'}
            />
          </button>
          <button onClick={() => openGallerySwiper(2)} className={'relative'}>
            <Image
              fill={true}
              src="/gallery/cards/photo-3.jpeg"
              sizes="(max-width: 640px) 100vw, 640px"
              alt={'메인 사진'}
              className={'object-cover rounded-md'}
            />
          </button>
          <button onClick={() => openGallerySwiper(3)} className={'relative row-span-2'}>
            <Image
              fill={true}
              src="/gallery/cards/photo-4.jpeg"
              sizes="(max-width: 640px) 100vw, 640px"
              alt={'메인 사진'}
              className={'object-cover rounded-md'}
            />
          </button>
          <button onClick={() => openGallerySwiper(4)} className={'relative row-span-2'}>
            <Image
              fill={true}
              src="/gallery/cards/photo-5.jpeg"
              sizes="(max-width: 640px) 100vw, 640px"
              alt={'메인 사진'}
              className={'object-cover rounded-md'}
            />
          </button>
        </div>
      </div>

      {isPopGallery && <GalleryPop initIndex={initGallerySwiperIndex} onClose={() => setIsPopGallery(false)} />}
    </div>
  );
}

type Swiper = SwiperContainer['swiper'] | null;

function GalleryPop({initIndex, onClose}: {
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

  const photoList = [
    '/gallery/cards/photo-1.jpeg',
    '/gallery/cards/photo-2.jpeg',
    '/gallery/cards/photo-3.jpeg',
    '/gallery/cards/photo-4.jpeg',
    '/gallery/cards/photo-5.jpeg',
    '/gallery/cards/photo-6.jpeg',
    '/gallery/cards/photo-7.jpeg',
    '/gallery/cards/photo-8.jpeg',
    '/gallery/cards/photo-9.jpeg',
    '/gallery/cards/photo-10.jpeg'
  ];

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
        <div className={'flex-initial h-[12%] px-2 py-2'}>
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