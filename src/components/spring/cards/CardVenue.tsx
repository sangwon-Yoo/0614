import { motion } from 'framer-motion';
import Image from 'next/image';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function CardVenue(
  {currentSlideIndex, isKakaoInitialized}: {currentSlideIndex: number, isKakaoInitialized: boolean}
) {

  return (
    <div className={'relative h-full flex flex-col'}>
      <div
        className={'flex flex-col justify-center items-center flex-none h-24'}
      >
        <span className={'font-greatVibes text-lg'}>Venue</span>
      </div>
      <div className={'flex flex-col flex-1'}>
        <div>
          <motion.p
            className={'whitespace-nowrap text-center leading-8'}
            key={`venue-0-${currentSlideIndex}`}
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            {'예식의 장소는'}
            <br />
            <span>{`" 서울 강남구 논현로 645 "`}</span>
            <br />
            {'엘리에나호텔웨딩 입니다.'}
          </motion.p>

          <div className={'flex justify-center items-center my-4'}>
            <CopyToClipboard text={'서울 강남구 논현로 645'} onCopy={() => null}>
              <button
                className={'h-5 bg-red-200 rounded-lg mx-2 px-3 text-xs'}
              >
                {`주소복사`}
              </button>
            </CopyToClipboard>
            <a
              className={'mx-2'}
              href={'tel:0234435670'}
            >
              <Image
                src="/image/icons/phone-1.svg"
                alt={'phone1'}
                width={14}
                height={14}
              />
            </a>
          </div>

        </div>

        <div className={'flex flex-col justify-around flex-1 mb-8'}>
          <div className={'relative h-[70%] mx-3 mb-2 bg-white'}>
            <Image
              fill={true}
              src="/image/venue/map-3.svg"
              sizes="(max-width: 640px) 640px, 640px"
              alt={'지도-1'}
              className={'object-contain rounded-md border border-gray-300'}
            />
          </div>
          <div className={'flex justify-between items-center flex-initial h-14 mx-3'}>
            <button
              className={'flex justify-center items-center flex-initial h-8 w-1/3'}
              onClick={() => window.open('https://naver.me/xRhOLU3g', '_blank')}
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
              className={'flex justify-center items-center flex-initial h-8 w-1/3 border-x border-gray-300'}
              onClick={() => isKakaoInitialized && window.Kakao.Navi.share({
                name: '엘리에나호텔 웨딩',
                x: 127.03128242092592,
                y: 37.51116721043193,
                coordType: 'wgs84',
              })}
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
              className={'flex justify-center items-center flex-initial h-8 w-1/3'}
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
