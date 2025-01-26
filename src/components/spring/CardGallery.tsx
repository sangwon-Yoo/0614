import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';

export default function CardGallery() {

  const [isPopGallery, setIsPopGallery] = useState<boolean>(false);

  const swiper = useSwiper();

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
          <p className={'text-center'}>사진을 눌러 보세요.</p>
        </div>
        <div className={'grid grid-rows-4 grid-cols-2 grid-flow-col gap-3 flex-1 mx-3 my-8'}>
          <button onClick={() => setIsPopGallery(true)} className={'relative'}>
            <Image
              fill={true}
              src="/gallery/cards/photo-1.jpeg"
              sizes="(max-width: 640px) 100vw, 640px"
              alt={'메인 사진'}
              className={'object-cover rounded-md'}
            />
          </button>
          <button onClick={() => setIsPopGallery(true)} className={'relative row-span-2'}>
            <Image
              fill={true}
              src="/gallery/cards/photo-2.jpeg"
              sizes="(max-width: 640px) 100vw, 640px"
              alt={'메인 사진'}
              className={'object-cover rounded-md'}
            />
          </button>
          <button onClick={() => setIsPopGallery(true)} className={'relative'}>
            <Image
              fill={true}
              src="/gallery/cards/photo-3.jpeg"
              sizes="(max-width: 640px) 100vw, 640px"
              alt={'메인 사진'}
              className={'object-cover rounded-md'}
            />
          </button>
          <button onClick={() => setIsPopGallery(true)} className={'relative row-span-2'}>
            <Image
              fill={true}
              src="/gallery/cards/photo-4.jpeg"
              sizes="(max-width: 640px) 100vw, 640px"
              alt={'메인 사진'}
              className={'object-cover rounded-md'}
            />
          </button>
          <button onClick={() => setIsPopGallery(true)} className={'relative row-span-2'}>
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

      {isPopGallery && <GalleryPop onClose={() => setIsPopGallery(false)} />}
    </div>
  );
}

function GalleryPop({onClose}: {onClose: () => void}) {

  const [isTransparentModal, setIsTransparentModal] = useState(true);

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
      className={`fixed z-50 inset-0 transition-opacity ease-linear duration-100 bg-black ${isTransparentModal ? 'opacity-0' : 'opacity-100'}`}
    >
      <div className={'flex flex-col h-full'}>
        <div className={'flex justify-between flex-initial h-[10%]'}>
          <div className={'flex justify-center items-center flex-initial w-24'}>
            <span className={'text-white'}>1 / 24</span>
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
        <div className={'flex-initial h-[75%]'}>
          <SwiperGalleryCards photoList={photoList} />
        </div>
        <div className={'flex-initial h-[15%] px-2 py-2'}>
          <SwiperGalleryThumbnail photoList={photoList} />
        </div>
      </div>
    </div>
  );
}

function SwiperGalleryCards({photoList}: {photoList: Array<string>}) {

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
      centeredSlides={true}
      onSlideChange={swiper => {}}
      onSwiper={swiper => {}}
      className={'h-full'}
    >
      {swiperSlideList}
    </Swiper>
  );
}

function SwiperGalleryThumbnail({photoList}: {photoList: Array<string>}) {

  const swiperSlideList = photoList.map((photo, index) => {

    return (
      <SwiperSlide key={index} className={'!w-14'}>
        <div className={'relative h-full'}>
          <Image
            fill={true}
            src={photo}
            sizes="56px"
            alt={`갤리리 사진 ${index}`}
            className={'object-contain'}
          />
        </div>
      </SwiperSlide>
    );
  });

  return (
    <Swiper
      slidesPerView={'auto'}
      spaceBetween={4}
      onSlideChange={swiper => {}}
      onSwiper={swiper => {}}
      className={'h-full'}
    >
      {swiperSlideList}
    </Swiper>
  );
}