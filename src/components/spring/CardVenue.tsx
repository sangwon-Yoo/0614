import { motion } from 'framer-motion';
import Image from 'next/image';

export default function CardVenue({currentSlideIndex}: {currentSlideIndex: number}) {

  return (
    <div className={'relative h-full flex flex-col'}>
      <div
        className={'flex flex-col justify-center items-center flex-none h-24'}
      >
        <span className={'font-greatVibes text-lg'}>Venue</span>
      </div>
      <div className={'flex flex-col flex-1'}>
        <motion.div
          className={'flex-initial mt-6'}
          key={`venue-0-${currentSlideIndex}`}
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <p className={'whitespace-nowrap text-center leading-8'}>
            {'예식의 장소는'}
            <br />
            <span>{`" 서울 강남구 논현로 645 "`}</span>
            <br />
            {'엘리에나호텔웨딩 입니다.'}
          </p>

          <div className={'flex justify-center items-center my-4'}>
            <button className={'h-8 w-24 ring-1 ring-black rounded-full mx-2'}>{'주소 복사'}</button>
            {/*<button className={'h-8 w-24 rounded-full mx-2 text-white bg-black'}>{'복사 완료'}</button>*/}
            <button
              className={'mx-2'}
              onClick={(event) => {
                //const newWindow = window.open('tmap://search?name=엘리에나호텔웨딩홀', '_blank');
                window.open('https://apis.openapi.sk.com/tmap/app/map?appKey=6oENJwPUXl4nEgYL0Mven4E5NpRgEDCTaQGXucXC&name=SKT타워&lon=126.984098&lat=37.566385', '_blank');
                //location.href='https://map.naver.com/p/entry/place/18842582?c=17.00,0,0,0,dh';
              }}
            >
              <Image
                src="/image/icons/phone-1.svg"
                alt={'phone1'}
                width={16}
                height={16}
              />
            </button>
          </div>

        </motion.div>

        <div className={'flex flex-col flex-1 my-8'}>
          <div className={'relative flex-1 h-[270px] mx-6 mb-2'}>
            <Image
              fill={true}
              src="/image/venue/map-1.png"
              sizes="(max-width: 640px) 640px, 640px"
              alt={'지도-1'}
              className={'object-cover rounded-md border border-gray-300'}
            />
          </div>
          <div className={'flex justify-between items-center flex-initial h-14 mx-6'}>
            <button
              className={'flex justify-center items-center flex-initial h-8 w-24 ring-1 ring-black rounded-full'}
              onClick={() => {}}
            >
              <Image
                src="/image/logos/naverMap.png"
                alt={'phone1'}
                width={16}
                height={16}
              />
              <span className={'text-sm ml-1'}>{`네이버지도`}</span>
            </button>
            <button
              className={'flex justify-center items-center flex-initial h-8 w-24 ring-1 ring-black rounded-full'}
              onClick={() => window.open('https://kko.kakao.com/RQ51FUOeFN', '_blank')}
            >
              <Image
                src="/image/logos/kakaoMap.png"
                alt={'phone1'}
                width={16}
                height={16}
              />
              <span className={'text-sm ml-1'}>{`카카오내비`}</span>
            </button>
            <button
              className={'flex justify-center items-center flex-initial h-8 w-24 ring-1 ring-black rounded-full'}
              onClick={() => window.open('https://apis.openapi.sk.com/tmap/app/map?appKey=6oENJwPUXl4nEgYL0Mven4E5NpRgEDCTaQGXucXC&name=엘리에나호텔웨딩&lon=127.03168441&lat=37.51121158', '_blank')}
            >
              <Image
                src="/image/logos/Tmap.svg"
                alt={'phone1'}
                width={16}
                height={16}
              />
              <span className={'text-sm ml-1'}>{`티맵`}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
