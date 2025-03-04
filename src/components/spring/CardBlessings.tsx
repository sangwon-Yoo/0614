import { motion } from 'framer-motion';
import Image from 'next/image';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function CardBlessings({currentSlideIndex}: {currentSlideIndex: number}) {

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
          <div className={'flex flex-col'}>
            <div className={'flex flex-col gap-2'}>
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
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
