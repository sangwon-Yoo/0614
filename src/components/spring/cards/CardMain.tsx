import Image from 'next/image';
import mainTextAnimation from '@/assets/lottie/mainTextAnimation.json';
import { DelayedLottie } from '@/components/atoms/DelayedLottie';

export default function CardMain() {

  return (
    <div className={'relative h-full'}>
      <div className={'relative h-full'}>
        <Image
          fill={true}
          src="/gallery/main.jpeg"
          sizes="(max-width: 640px) 100vw, 640px"
          alt={'메인 사진'}
          className={'object-cover'}
        />
        <div
          className={'absolute h-full w-full bg-gradient-to-t from-[#000000AA] via-transparent via-20%'}
          aria-hidden={true}
        />
      </div>

      <div className={'absolute flex justify-between top-0 h-[10%] w-full font-PTSerif text-white text-sm leading-[22px] tracking-wide'}>
        <span className={'flex justify-center items-center w-32'}>YOOSANGWON</span>
        <span className={'flex justify-center items-center w-32'}>HEOHYUNJUNG</span>
      </div>

      <div className={'absolute flex flex-col bottom-0 w-full mb-[10%]'}>
        <div>
          <DelayedLottie delay={1500} lottieProps={{ animationData : mainTextAnimation, loop : false }} />
        </div>
        <p className={'flex flex-col justify-center items-center h-10 font-PTSerif text-white text-sm leading-[22px] tracking-wide mt-6'}>
          <span>ELIENAHOTEL IMPERIALHALL</span>
          <span>JUNE 14, 2025 SAT 14:30PM</span>
        </p>
      </div>
    </div>
  );
}
