import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

export default function CardDetails({currentSlideIndex}: {currentSlideIndex: number}) {

  const [activeTab, setActiveTab] = useState<'예식' | '식사' | '주차'>('예식');

  return (
    <div className={'relative h-full flex flex-col'}>
      <div
        className={'flex flex-col justify-center items-center flex-none h-24'}
      >
        <span className={'font-greatVibes text-lg'}>Details</span>
      </div>
      <div className={'flex flex-col flex-1 px-3 pb-8'}>

        <div className={'flex justify-center items-center flex-initial h-1/6 mb-10'}>
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
        <div className={'flex flex-col justify-between flex-initial h-5/6'}>
          <div className={'flex justify-around'}>
            <button
              className={`flex justify-center items-center h-14 w-16 ${activeTab == '예식' ? 'font-bold border-b-2 border-red-100' : ''}`}
              onClick={() => setActiveTab('예식')}
            >
              예식
            </button>
            <button
              className={`flex justify-center items-center h-14 w-32 ${activeTab == '식사' ? 'font-bold border-b-2 border-red-100' : ''}`}
              onClick={() => setActiveTab('식사')}
            >
              식사 및 답례품
            </button>
            <button
              className={`flex justify-center items-center h-14 w-16 ${activeTab == '주차' ? 'font-bold border-b-2 border-red-100' : ''}`}
              onClick={() => setActiveTab('주차')}
            >
              주차
            </button>
          </div>

          <div className={'flex flex-col justify-center items-center flex-initial'}>
            <motion.p
              className={'whitespace-nowrap text-center leading-8'}
              key={`detail-1-${currentSlideIndex}-${activeTab}`}
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              {activeTab == '예식' && (
                <>
                  {`예식은`}
                  <br/>
                  {`1부와 2부로 구성되어 있으며`}
                  <br/>
                  {`1부에 성혼선언문 낭독 및`}
                  <br/>
                  {`축가 순서가 있습니다.`}
                  <br/>
                  {`2부에는 식사와 함께`}
                  <br/>
                  {`기념 촬영이 있습니다.`}
                </>
              )}
              {activeTab == '식사' && (
                <>
                  {`식사는`}
                  <br/>
                  {`" 떡과 에피타이저, 연어 샐러드,`}
                  <br/>
                  {`송로버섯 스프, 안심 스테이크,`}
                  <br/>
                  {`수제 초밥,`}
                  <br/>
                  {`잔치국수,`}
                  <br/>
                  {`디저트와 커피 "`}
                  <br/>
                  {`가 준비됩니다.`}
                </>
              )}
              {activeTab == '주차' && (
                <>
                  {`주차는 호텔 뒷편에`}
                  <br/>
                  {`지상 주차장으로 안내 드립니다.`}
                  <br/>
                  {`2시간 주차권이 마련되어 있으니`}
                  <br />
                  {`이동에 도움이 되시길 바랍니다.`}
                  <br />
                </>
              )}
            </motion.p>
          </div>

          <div className={'flex-none flex justify-center mb-8'}>
            <Image
              src="/image/flower/rose-2.svg"
              alt={'rose1'}
              width={56}
              height={56}
            />
          </div>

        </div>
      </div>
    </div>
  );
}
