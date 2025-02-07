import { motion } from 'framer-motion';

export default function CardDetails({currentSlideIndex}: {currentSlideIndex: number}) {

  return (
    <div className={'relative h-full flex flex-col'}>
      <div
        className={'flex flex-col justify-center items-center flex-none h-24'}
      >
        <span className={'font-greatVibes text-lg'}>Details</span>
      </div>
      <div className={'flex flex-col flex-1 px-3 pb-8'}>

        <div className={'flex justify-center items-center flex-initial h-1/6'}>
          <motion.p
            className={'whitespace-nowrap text-center leading-8'}
            key={`detail-0-${currentSlideIndex}`}
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            {`당일 예식에 불편함이 없으시도록`}
            <br/>
            {`안내사항을 말씀드립니다.`}
          </motion.p>
        </div>
        <div className={'flex flex-col flex-initial h-5/6'}>
          <div></div>
        </div>

        {/*<div className={'h-full bg-red-200'}></div>*/}

      </div>
    </div>
  );
}
