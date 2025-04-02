import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function CardEnding({currentSlideIndex, isKakaoInitialized}: {currentSlideIndex: number, isKakaoInitialized: boolean}) {

  const [isKakaoShareButtonInitialized, setIsKakaoShareButtonInitialized] = useState<boolean>(false);

  return (
    <div className={'relative h-full flex flex-col'}>
      <div
        className={'flex flex-col justify-center items-center flex-none h-24'}
      >
        <span className={'font-greatVibes text-lg'}>Ending</span>
      </div>
      <div className={'flex flex-col justify-between flex-1'}>
        <motion.div
          className={'flex-none'}
          key={`welcome-0-${currentSlideIndex}`}
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <p className={'whitespace-nowrap text-center leading-8 mt-5'}>
            {'따뜻하고 행복하게'}
            <br />
            {'잘 살겠습니다.'}
            <br />
            <br />
            {'베풀며 배려하는'}
            <br />
            {'한 쌍이 되겠습니다.'}
          </p>
        </motion.div>

        <div className={'flex-none flex justify-center'}>
          <Image
            src="/image/flower/rose-2.svg"
            alt={'rose1'}
            width={56}
            height={56}
          />
        </div>

        <div className={'flex flex-col justify-center items-center h-20 mb-20'}>
          <p className={'w-48 leading-7 text-center mb-4'}>
            {'공유하기'}
          </p>
          <div className={'flex w-24 justify-between'}>
            <div ref={ref => {
              if(ref && isKakaoInitialized && !isKakaoShareButtonInitialized) {
                setIsKakaoShareButtonInitialized(true);
                window.Kakao.Share.createDefaultButton({
                  container: ref,
                  objectType : 'feed',
                  content : {
                    title : '상원 ♥ 현정',
                    imageUrl : 'https://0614-theta.vercel.app/gallery/main.jpeg',
                    link : {
                      webUrl : 'https://0614-theta.vercel.app/invitation/spring/0614',
                      mobileWebUrl : 'https://0614-theta.vercel.app/invitation/spring/0614'
                    }
                  }
                });
              }
            }}>
              <Image
                src="/image/logos/kakaoTalk.png"
                alt={'kakoTalk'}
                width={36}
                height={36}
              />
            </div>
            <div
              onClick={() => window.open(`https://band.us/plugin/share?body=${encodeURIComponent(
                '우리 결혼해요!\n상원 ♥ 현정\n모바일 청첩장 링크 : https://0614-theta.vercel.app/invitation/spring/0614'
              )}&route=0614-theta.vercel.app`, "_blank")}
            >
              <Image
                src="/image/logos/naverBand.png"
                alt={'naverBand'}
                width={36}
                height={36}
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
