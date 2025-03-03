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

        <div className={'flex flex-col justify-center items-center h-20 mb-24'}>
          <p className={'w-48 leading-7 text-center mb-8'}>
            {'공유하기'}
          </p>
          <div className={'flex w-48 justify-between'}>
            <div id={'kakaotalk-sharing-btn'} ref={ref => {
              if(ref && isKakaoInitialized && !isKakaoShareButtonInitialized) {
                setIsKakaoShareButtonInitialized(true);
                console.log('sdf');
                window.Kakao.Share.createDefaultButton({
                  container: ref,
                  objectType : 'feed',
                  content : {
                    title : '현정 ♥ 상원',
                    imageUrl : 'https://localhost:3000/gallery/main.jpg',
                    link : 'http://localhost:3000/invitation/spring/0614'
                  }
                });
              }
            }}>
              카카오톡
            </div>
            <div>
              네이버 밴드
              {/*<script type="text/javascript" src="//developers.band.us/js/share/band-button.js?v=03032025"></script>
              <script type="text/javascript">
                new ShareBand.makeButton({"lang":"en-US","type":"c"});
              </script>*/}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
