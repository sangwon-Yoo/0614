import { motion } from 'framer-motion';
import Image from 'next/image';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useEffect, useState } from 'react';

export default function CardBlessings({currentSlideIndex, selfSlideIndex}: {currentSlideIndex: number, selfSlideIndex: number}) {

  const [isShowMansFamily, setIsShowMansFamily] = useState<boolean>(false);
  const [isRenderMansFamilyAnimation, setIsRenderMansFamilyAnimation] = useState<boolean>(false);
  const [isShowGirlsFamily, setIsShowGirlsFamily] = useState<boolean>(false);
  const [isRenderGirlsFamilyAnimation, setIsRenderGirlsFamilyAnimation] = useState<boolean>(false);

  useEffect(() => {
    //다른 슬라이드로 이동시 애니메이션 상태값 초기화
    if(currentSlideIndex !== selfSlideIndex) {
      setIsRenderMansFamilyAnimation(false);
      setIsShowMansFamily(false);
      setIsRenderGirlsFamilyAnimation(false);
      setIsShowGirlsFamily(false);
    }
  }, [currentSlideIndex, selfSlideIndex]);

  return (
    <div className={'relative h-full flex flex-col'}>
      <div
        className={'flex flex-col justify-center items-center flex-none h-24'}
      >
        <span className={'font-greatVibes text-lg'}>Blessings</span>
      </div>
      <div className={'flex flex-col justify-around flex-1 px-3 pb-8'}>
        <div className={'flex justify-center items-center'}>
          <motion.p
            className={'whitespace-nowrap text-center leading-8'}
            key={`blessing-0-${currentSlideIndex}`}
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            {`축하의 따뜻한 마음`}
            <br/>
            {`그 마음을 소중히 간직하겠습니다.`}
          </motion.p>
        </div>
        <motion.div
          className={'flex flex-col'}
          key={`blessing-1-${currentSlideIndex}`}
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
        >
          <div className={'flex flex-col items-center gap-5'}>
            <button
              className={'flex gap-4'}
              onClick={() => {
              setIsRenderMansFamilyAnimation(true);
              if(isShowMansFamily) {
                setIsShowMansFamily(false);
              } else {
                setIsShowMansFamily(true);
                setIsShowGirlsFamily(false);
              }
            }}>
              <span>신랑측 마음전하기</span>
              <Image
                className={isShowMansFamily ? 'rotate-180' : ''}
                src="/image/icons/arrow-down.svg"
                alt={'arrow-down'}
                width={14}
                height={14}
              />
            </button>
            {isRenderMansFamilyAnimation && (
              <motion.div
                className={'relative flex flex-col gap-1 w-full overflow-hidden'}
                key={`blessing-2-${isShowMansFamily}`}
                initial={isShowMansFamily ? { height : 0 } : { height : 190 }}
                animate={isShowMansFamily ? { height : 190 } : { height : 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
              >
                <div className={'flex justify-between items-center h-14'}>
                  <span className={'font-bold'}>신랑 아버지 유진재</span>
                  <div className={'flex flex-col justify-center items-center text-xs'}>
                    <div className={'flex justify-evenly h-4 w-20'}>
                      <a href={'tel:01036149589'} className={'flex items-center'}>
                        <Image
                          src="/image/icons/phone-blue.svg"
                          alt={'phone'}
                          width={16}
                          height={16}
                        />
                      </a>
                      <a href={'sms:01036149589'} className={'flex items-center'}>
                        <Image
                          src="/image/icons/message-blue.svg"
                          alt={'message'}
                          width={16}
                          height={16}
                        />
                      </a>
                    </div>
                    <span className={'leading-5 text-center'}>신한은행 518-055047-01-111</span>
                    <CopyToClipboard text={'기업은행 518-055047-01-011'} onCopy={() => {}}>
                      <button
                        className={'h-4 bg-blue-200 rounded-lg px-3'}
                      >
                        {`계좌복사`}
                      </button>
                    </CopyToClipboard>
                  </div>
                </div>
                <div className={'flex justify-between items-center h-14'}>
                  <span className={'font-bold'}>신랑 아버지 유진재</span>
                  <div className={'flex flex-col justify-center items-center text-xs'}>
                    <div className={'flex justify-evenly h-4 w-20'}>
                      <a href={'tel:01036149589'} className={'flex items-center'}>
                        <Image
                          src="/image/icons/phone-blue.svg"
                          alt={'phone'}
                          width={16}
                          height={16}
                        />
                      </a>
                      <a href={'sms:01036149589'} className={'flex items-center'}>
                        <Image
                          src="/image/icons/message-blue.svg"
                          alt={'message'}
                          width={16}
                          height={16}
                        />
                      </a>
                    </div>
                    <span className={'leading-5 text-center'}>신한은행 518-055047-01-111</span>
                    <CopyToClipboard text={'기업은행 518-055047-01-011'} onCopy={() => {}}>
                      <button
                        className={'h-4 bg-blue-200 rounded-lg px-3'}
                      >
                        {`계좌복사`}
                      </button>
                    </CopyToClipboard>
                  </div>
                </div>
                <div className={'flex justify-between items-center h-14'}>
                  <span className={'font-bold'}>신랑 아버지 유진재</span>
                  <div className={'flex flex-col justify-center items-center text-xs'}>
                    <div className={'flex justify-evenly h-4 w-20'}>
                      <a href={'tel:01036149589'} className={'flex items-center'}>
                        <Image
                          src="/image/icons/phone-blue.svg"
                          alt={'phone'}
                          width={16}
                          height={16}
                        />
                      </a>
                      <a href={'sms:01036149589'} className={'flex items-center'}>
                        <Image
                          src="/image/icons/message-blue.svg"
                          alt={'message'}
                          width={16}
                          height={16}
                        />
                      </a>
                    </div>
                    <span className={'leading-5 text-center'}>신한은행 518-055047-01-111</span>
                    <CopyToClipboard text={'기업은행 518-055047-01-011'} onCopy={() => {}}>
                      <button
                        className={'h-4 bg-blue-200 rounded-lg px-3'}
                      >
                        {`계좌복사`}
                      </button>
                    </CopyToClipboard>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-t from-slate-100 to-transparent"></div>
              </motion.div>
            )}

            <button
              className={'flex gap-4'}
              onClick={() => {
              setIsRenderGirlsFamilyAnimation(true);
              if(isShowGirlsFamily) {
                setIsShowGirlsFamily(false);
              } else {
                setIsShowGirlsFamily(true);
                setIsShowMansFamily(false);
              }
            }}>
              <span>신부측 마음전하기</span>
              <Image
                className={isShowGirlsFamily ? 'rotate-180' : ''}
                src="/image/icons/arrow-down.svg"
                alt={'arrow-down'}
                width={14}
                height={14}
              />
            </button>
            {isRenderGirlsFamilyAnimation && (
              <motion.div
                className={'relative flex flex-col gap-1 w-full overflow-hidden'}
                key={`blessing-3-${isShowGirlsFamily}`}
                initial={isShowGirlsFamily ? { height : 0 } : { height : 184 }}
                animate={isShowGirlsFamily ? { height : 184 } : { height : 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
              >
                <div className={'flex justify-between items-center h-14'}>
                  <span className={'font-bold'}>신부 아버지 허만인</span>
                  <div className={'flex flex-col justify-center items-center text-xs'}>
                    <div className={'flex justify-evenly h-4 w-20'}>
                      <a href={'tel:01036149589'} className={'flex items-center'}>
                        <Image
                          src="/image/icons/phone-pink.svg"
                          alt={'phone'}
                          width={16}
                          height={16}
                        />
                      </a>
                      <a href={'sms:01036149589'} className={'flex items-center'}>
                        <Image
                          src="/image/icons/message-pink.svg"
                          alt={'message'}
                          width={16}
                          height={16}
                        />
                      </a>
                    </div>
                    <span className={'leading-5 text-center'}>신한은행 518-055047-01-111</span>
                    <CopyToClipboard text={'기업은행 518-055047-01-011'} onCopy={() => {}}>
                      <button
                        className={'h-4 bg-red-200 rounded-lg px-3'}
                      >
                        {`계좌복사`}
                      </button>
                    </CopyToClipboard>
                  </div>
                </div>
                <div className={'flex justify-between items-center h-14'}>
                  <span className={'font-bold'}>신부 아버지 허만인</span>
                  <div className={'flex flex-col justify-center items-center text-xs'}>
                    <div className={'flex justify-evenly h-4 w-20'}>
                      <a href={'tel:01036149589'} className={'flex items-center'}>
                        <Image
                          src="/image/icons/phone-pink.svg"
                          alt={'phone'}
                          width={16}
                          height={16}
                        />
                      </a>
                      <a href={'sms:01036149589'} className={'flex items-center'}>
                        <Image
                          src="/image/icons/message-pink.svg"
                          alt={'message'}
                          width={16}
                          height={16}
                        />
                      </a>
                    </div>
                    <span className={'leading-5 text-center'}>신한은행 518-055047-01-111</span>
                    <CopyToClipboard text={'기업은행 518-055047-01-011'} onCopy={() => {}}>
                      <button
                        className={'h-4 bg-red-200 rounded-lg px-3'}
                      >
                        {`계좌복사`}
                      </button>
                    </CopyToClipboard>
                  </div>
                </div>
                <div className={'flex justify-between items-center h-14'}>
                  <span className={'font-bold'}>신부 아버지 허만인</span>
                  <div className={'flex flex-col justify-center items-center text-xs'}>
                    <div className={'flex justify-evenly h-4 w-20'}>
                      <a href={'tel:01036149589'} className={'flex items-center'}>
                        <Image
                          src="/image/icons/phone-pink.svg"
                          alt={'phone'}
                          width={16}
                          height={16}
                        />
                      </a>
                      <a href={'sms:01036149589'} className={'flex items-center'}>
                        <Image
                          src="/image/icons/message-pink.svg"
                          alt={'message'}
                          width={16}
                          height={16}
                        />
                      </a>
                    </div>
                    <span className={'leading-5 text-center'}>신한은행 518-055047-01-111</span>
                    <CopyToClipboard text={'기업은행 518-055047-01-011'} onCopy={() => {}}>
                      <button
                        className={'h-4 bg-red-200 rounded-lg px-3'}
                      >
                        {`계좌복사`}
                      </button>
                    </CopyToClipboard>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-t from-slate-100 to-transparent"></div>
              </motion.div>
            )}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
