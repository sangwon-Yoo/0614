import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';


export type DDayInfo = {remains: string; dDay: string;};

export default function CardDate({currentSlideIndex}: {currentSlideIndex: number}) {

  const getNow = async () => {
    try {
      return (await fetch('/invitation/apis/dDay')).json() as Promise<DDayInfo>;
    } catch (error) {
      console.error(error);
    }
  };
  const [dDayInfo, setDDayInfo] = useState<DDayInfo>();

  useEffect(() => {
    getNow().then(data => {
      console.log(data);
      setDDayInfo(data)
    });
  }, []);

  const monthDays: Array<{ date: number, day: 'sun' | 'sat' | 'weekdays', theDay?: boolean}> = [
    { date : 1, day : 'sun'}, { date : 2, day : 'weekdays'}, { date : 3, day : 'weekdays'}, { date : 4, day : 'weekdays'}, { date : 5, day : 'weekdays'}, { date : 6, day : 'weekdays'}, { date : 7, day : 'sat'},
    { date : 8, day : 'sun'}, { date : 9, day : 'weekdays'}, { date : 10, day : 'weekdays'}, { date : 11, day : 'weekdays'}, { date : 12, day : 'weekdays'}, { date : 13, day : 'weekdays'}, { date : 14, day : 'sat', theDay : true},
    { date : 15, day : 'sun'}, { date : 16, day : 'weekdays'}, { date : 17, day : 'weekdays'}, { date : 18, day : 'weekdays'}, { date : 19, day : 'weekdays'}, { date : 20, day : 'weekdays'}, { date : 21, day : 'sat'},
    { date : 22, day : 'sun'}, { date : 23, day : 'weekdays'}, { date : 24, day : 'weekdays'}, { date : 25, day : 'weekdays'}, { date : 26, day : 'weekdays'}, { date : 27, day : 'weekdays'}, { date : 28, day : 'sat'},
    { date : 29, day : 'sun'}, { date : 30, day : 'weekdays'}
  ];

  return (
    <div className={'relative h-full flex flex-col'}>
      <div
        className={'flex flex-col justify-center items-center flex-none h-24'}
      >
        <span className={'font-greatVibes text-lg'}>Date</span>
      </div>
      <div className={'flex flex-col flex-1'}>

        <div className={'flex justify-center items-center flex-initial h-1/6'}>
          <motion.span
            className={'font-bold'}
            key={`date-0-${currentSlideIndex}`}
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            6월 14일 토요일 오후 2시 30분
          </motion.span>
        </div>

        <div className={'flex-initial h-3/6'}>
          <div className={'grid grid-cols-7 mx-3 text-sm auto-rows-auto'}>
            {monthDays.map((day, index) => {

              return (
                <div
                  className={`relative flex justify-center items-center h-14`}
                  key={index}
                >
                  {day.theDay && (
                    <Image
                      src="/image/heart/heart-3.svg"
                      alt={'heart1'}
                      width={40}
                      height={40}
                      className={'absolute'}
                    />
                  )}
                  <span className={`z-10 ${day.theDay ? 'font-bold' : ''} ${day.day == 'sun' ? 'text-red-400' : ''} ${day.day == 'sat' ? 'text-blue-400' : ''}`}>{day.date}</span>
                </div>
              );

            })}
          </div>
        </div>

        <div className={'flex flex-col justify-center items-center flex-initial h-2/6'}>
          <motion.div
            key={`date-2-${currentSlideIndex}`}
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
          >
            <span className={'font-greatVibes mt-6 text-3xl'}>
              {`D`}
            </span>
            <span className={'mt-6 text-2xl'}>
              {` - ${dDayInfo?.dDay}`}
            </span>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
