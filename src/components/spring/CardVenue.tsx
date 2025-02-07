import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { KAKAO_APP_KEY } from '@/const/global';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function CardVenue(
  {thisCardIndex, currentSlideIndex}: {thisCardIndex: number, currentSlideIndex: number}
) {

  const [isKakaoInitialized, setKakaoInitialized] = useState<boolean>(false);
  const [isCopyToClipBoard, setIsCopyToClipBoard] = useState<boolean>(false);

  useEffect(() => {

    //카카오 SDK 초기화
    if(window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init(KAKAO_APP_KEY);
      setKakaoInitialized(true);
      console.log('kakao has initialized!');
    }


  }, [currentSlideIndex]);

  useEffect(() => {
    if(thisCardIndex == currentSlideIndex) {
      setIsCopyToClipBoard(false);//슬라이드 진입시 클립보드 초기화
    }
  }, [currentSlideIndex, thisCardIndex]);

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
            <CopyToClipboard text={'서울 강남구 논현로 645'} onCopy={() => setIsCopyToClipBoard(true)}>
              {isCopyToClipBoard ? (
                <motion.button
                  className={'h-8 bg-red-100 rounded-full mx-2 px-3'}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                >
                  {`복사되었습니다.`}
                </motion.button>
              ) : (
                <button
                  className={'h-8 bg-red-100 rounded-full mx-2 px-3'}
                >
                  {`주소 복사`}
                </button>
              )}

            </CopyToClipboard>
            <a
              className={'mx-2'}
              href={'tel:0234435670'}
            >
              <Image
                src="/image/icons/phone-1.svg"
                alt={'phone1'}
                width={16}
                height={16}
              />
            </a>
          </div>

        </div>

        <div className={'flex flex-col flex-1 my-8'}>
          <div className={'relative flex-1 h-[270px] mx-3 mb-2'}>
            <Image
              fill={true}
              src="/image/venue/map-1.png"
              sizes="(max-width: 640px) 640px, 640px"
              alt={'지도-1'}
              className={'object-cover rounded-md border border-gray-300'}
            />
          </div>
          <div className={'flex justify-between items-center flex-initial h-14 mx-3'}>
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
              onClick={() => isKakaoInitialized ? window.Kakao.Navi.share({
                name: '현대백화점 판교점',
                x: 127.11205203011632,
                y: 37.39279717586919,
                coordType: 'wgs84',
              }) : null}
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
