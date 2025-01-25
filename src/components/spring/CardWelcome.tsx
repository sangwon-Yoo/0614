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
            sizes="64px"
            width={1}
            height={1}
            className={'w-16 h-auto'}
          />
        </div>
        <motion.div
          className={'flex-none flex flex-row justify-center'}
          key={`welcome-1-${currentSlideIndex}`}
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
        >
          <p className={'whitespace-nowrap mb-6 flex-none w-48 leading-7'}>
            <span className={'font-bold'}>{' 유 진 재 '}</span>
            &#183;
            <span className={'font-bold'}>{' 윤 혜 정 '}</span>
            {'의 아들'}
            <br />
            <span className={'font-bold'}>{' 허 만 인 '}</span>
            &#183;
            <span className={'font-bold'}>{' 이 정 자 '}</span>
            {'의 딸'}
          </p>
          <p className={'whitespace-nowrap mb-6 flex-none w-14 leading-7'}>
            <span className={'font-bold'}>{' 유 상 원 '}</span>
            <br />
            <span className={'font-bold'}>{' 허 현 정 '}</span>
          </p>
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
            {'엘리에나 호텔, 3F 임페리얼 홀'}
            <br />
          </p>
        </motion.div>
      </div>
    </div>
  );
}
