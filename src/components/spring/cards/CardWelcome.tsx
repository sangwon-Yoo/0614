import Image from 'next/image';
import { motion } from 'framer-motion';

export default function CardWelcome({currentSlideIndex}: {currentSlideIndex: number}) {

  return (
    <div className={'relative h-full flex flex-col'}>
      <div
        className={'flex flex-col justify-center items-center flex-none h-24'}
      >
        <span className={'font-greatVibes text-lg'}>Welcome</span>
      </div>
      <div className={'flex flex-col justify-between flex-1'}>
        <motion.div
          className={'flex-none'}
          key={`welcome-0-${currentSlideIndex}`}
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <p className={'whitespace-nowrap text-center leading-8 mb-6'}>
            {'저희 두 사람이'}
            <br />
            {'평생을 함께하기 위해'}
            <br />
            {'서로의 반려자가 되려 합니다.'}
            <br />
          </p>
          <p className={'whitespace-nowrap text-center leading-8'}>
            {'그 진실 서약을 하는 자리에'}
            <br />
            {'소중한 분들을 모십니다.'}
            <br />
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
        <motion.div
          className={'flex flex-col justify-center items-center overflow-x-auto w-full whitespace-pre'}
          key={`welcome-1-${currentSlideIndex}`}
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
        >
          <div className={'flex mb-2 leading-7'}>
            <div className={'flex-auto font-bold w-[60px] text-center'}>{'유 진 재'}</div>
            <div className={'flex-auto font-bold w-3 text-center'}>&#183;</div>
            <div className={'flex-auto font-bold w-[60px] text-center'}>{'윤 혜 정'}</div>
            <div className={'flex-auto w-[60px] ml-1'}>{'의 아들'}</div>
            <div className={'flex-auto font-bold w-[60px] text-center'}>{'유 상 원'}</div>
          </div>
          <div className={'flex mb-2 leading-7'}>
            <div className={'flex-auto font-bold w-[60px] text-center'}>{'허 만 인'}</div>
            <div className={'flex-auto font-bold w-3 text-center'}>&#183;</div>
            <div className={'flex-auto font-bold w-[60px] text-center'}>{'이 정 자'}</div>
            <div className={'flex-auto w-[60px] ml-1'}>{'의 딸'}</div>
            <div className={'flex-auto font-bold w-[60px] text-center'}>{'허 현 정'}</div>
          </div>
        </motion.div>
        <motion.div
          className={'flex-none'}
          key={`welcome-2-${currentSlideIndex}`}
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
        >
          <p className={'whitespace-nowrap text-center leading-8 mb-8'}>
            {'2025년 6월 14일 오후 2시 30분'}
            <br />
            {'엘리에나호텔웨딩, 3F 임페리얼 홀'}
            <br />
          </p>
        </motion.div>
      </div>
    </div>
  );
}
