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
        <div className={'flex justify-center items-center flex-initial pb-6'}>
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
          className={'flex flex-col flex-initial'}
          key={`blessing-1-${currentSlideIndex}`}
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
        >
          <div className={'flex justify-center items-center h-14'}>연락하기</div>

          <div className={'flex justify-around h-8'}>
            <div className={'flex'}>
              <span className={'flex items-center w-24'}>신부</span>
              <span className={'flex items-center font-bold'}>허현정</span>
            </div>
            <div className={'flex justify-between w-20'}>
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
          </div>
          <div className={'flex justify-around h-8'}>
            <div className={'flex'}>
              <span className={'flex items-center w-24'}>신부 아버지</span>
              <span className={'flex items-center font-bold'}>허만인</span>
            </div>
            <div className={'flex justify-between w-20'}>
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
          </div>
          <div className={'flex justify-around h-8'}>
            <div className={'flex'}>
              <span className={'flex items-center w-24'}>신부 어머니</span>
              <span className={'flex items-center font-bold'}>이정자</span>
            </div>
            <div className={'flex justify-between w-20'}>
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
          </div>

          <div className={'my-4'}></div>

          <div className={'flex justify-around h-8'}>
            <div className={'flex'}>
              <span className={'flex items-center w-24'}>신부</span>
              <span className={'flex items-center font-bold'}>허현정</span>
            </div>
            <div className={'flex justify-between w-20'}>
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
          </div>
          <div className={'flex justify-around h-8'}>
            <div className={'flex'}>
              <span className={'flex items-center w-24'}>신부 아버지</span>
              <span className={'flex items-center font-bold'}>허만인</span>
            </div>
            <div className={'flex justify-between w-20'}>
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
          </div>
          <div className={'flex justify-around h-8'}>
            <div className={'flex'}>
              <span className={'flex items-center w-24'}>신부 어머니</span>
              <span className={'flex items-center font-bold'}>이정자</span>
            </div>
            <div className={'flex justify-between w-20'}>
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
          </div>
        </motion.div>

        <motion.div
          className={'flex flex-col flex-initial'}
          key={`blessing-2-${currentSlideIndex}`}
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 1 }}
        >
          <div className={'flex justify-center items-center h-14 mt-6'}>축의금 전달하기</div>
          <div className={'flex justify-between items-center h-10 m'}>
            <div className={'flex w-4/5'}>
              <span className={'inline-block font-bold w-14'}>신부측</span>
              <span className={'inline-block'}>토스 1111-11111-11</span>
            </div>`
            <CopyToClipboard text={'토스뱅크 1111-11-1111111'} onCopy={() => {}}>
              <button
                className={'h-8 bg-red-200 rounded-lg px-3'}
              >
                {`복사`}
              </button>
            </CopyToClipboard>
          </div>
          <div className={'flex justify-between items-center h-10'}>
            <div className={'flex w-4/5'}>
              <span className={'inline-block font-bold w-14'}>신랑측</span>
              <span className={'inline-block'}>기업은행 518-055047-01-011</span>
            </div>
            <CopyToClipboard text={'기업은행 518-055047-01-011'} onCopy={() => {}}>
              <button
                className={'h-8 bg-blue-200 rounded-lg px-3'}
              >
                {`복사`}
              </button>
            </CopyToClipboard>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
