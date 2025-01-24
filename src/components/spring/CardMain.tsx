import Image from 'next/image';
import { ReactTyped } from 'react-typed';

export default function CardMain() {
  return (
    <div className={'relative h-full'}>
      <div className={'relative h-full'}>
        <Image
          fill={true}
          src="/gallery/main.jpg"
          sizes="(max-width: 640px) 100vw, 640px"
          alt={'메인 사진'}
          className={'object-cover'}
        />
        <div
          className={
            'absolute h-full w-full bg-gradient-to-t from-[#000000AA] via-transparent via-25%'
          }
          aria-hidden={true}
        />
      </div>

      <div
        className={'absolute flex justify-center items-center w-full top-12'}
      >
        <ReactTyped
          className={
            'text-center font-greatVibes drop-shadow-md text-white text-4xl'
          }
          strings={[`We're getting married.`]}
          typeSpeed={25}
          contentType={'html'}
          startDelay={1500}
          showCursor={false}
        />
      </div>

      <div
        className={
          'absolute text-lg font-medium w-full flex flex-col items-center bottom-10 text-white'
        }
      >
        <div>허현정 &#x2665; 유상원</div>
        <div>2025년 6월 14일 오후 2시 30분</div>
        <div>엘리에나 호텔, 3F 임페리얼 홀</div>
      </div>
    </div>
  );
}
