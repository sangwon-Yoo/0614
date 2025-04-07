import { motion } from 'framer-motion';
import { useState } from 'react';

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
            {`예식에 불편함이 없으시도록`}
            <br/>
            {`안내사항을 말씀드립니다.`}
          </motion.p>
        </div>
        <div className={'flex flex-col flex-initial h-5/6'}>
          <div className={'flex justify-around'}>
            <button
              className={`relative flex justify-center items-center h-14 w-16`}
              onClick={() => setActiveTab('예식')}
            >
              예식
              <div className={`absolute bottom-0 w-full border-[1.5px] ${activeTab == '예식' ? 'border-red-200' : 'border-none'} rounded-full`}></div>
            </button>
            <button
              className={`relative flex justify-center items-center h-14 w-32`}
              onClick={() => setActiveTab('식사')}
            >
              식사 및 답례품
              <div className={`absolute bottom-0 w-full border-[1.5px] ${activeTab == '식사' ? 'border-red-200' : 'border-none'} rounded-full`}></div>
            </button>
            <button
              className={`relative flex justify-center items-center h-14 w-16`}
              onClick={() => setActiveTab('주차')}
            >
              주차
              <div className={`absolute bottom-0 w-full border-[1.5px] ${activeTab == '주차' ? 'border-red-200' : 'border-none'} rounded-full`}></div>
            </button>
          </div>

          <div className={'flex flex-col justify-center items-center flex-initial mt-8'}>
            <motion.p
              className={'whitespace-nowrap text-center leading-8'}
              key={`detail-1-${currentSlideIndex}-${activeTab}`}
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <>
                {activeTab == '예식' && (
                  <>
                    {`예식은 1부와 2부로 진행됩니다.`}
                    <br/>
                    {`1부 예식 후 기념 촬영이 있으며`}
                    <br/>
                    <br/>
                    {`2부는 자리로 식사가 서빙되어`}
                    <br/>
                    {`동시 예식으로 진행됩니다.`}
                  </>
                )}
                {activeTab == '식사' && (
                  <>
                    {`식사는 코스 요리로 준비됩니다.`}
                    <br/>
                    <br/>
                    {`" 수제 떡 / 에피타이저 / 연어 샐러드`}
                    <br/>
                    {`송로버섯 스프 / 안심 스테이크`}
                    <br/>
                    {`수제 초밥 / 잔치국수 / 디저트 "`}
                    <br/>
                    <br/>
                    {`식사를 하시지 않는 분들은 식권을 지참하시어`}
                    <br/>
                    {`1층에서 와인과 교환해 가시기 바랍니다.`}
                  </>
                )}
                {activeTab == '주차' && (
                  <>
                    {`주차는 호텔 뒷편에`}
                    <br/>
                    {`지하 및 지상 주차장으로 안내 드립니다.`}
                    <br/>
                    <br/>
                    {`2시간 주차권이 마련되어 있으니`}
                    <br />
                    {`이동에 도움이 되시길 바랍니다.`}
                    <br />
                  </>
                )}
              </>
            </motion.p>
          </div>

        </div>
      </div>
    </div>
  );
}
