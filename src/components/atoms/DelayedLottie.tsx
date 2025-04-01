import { useEffect, useState } from 'react';
import { LottieComponentProps } from 'lottie-react';
import dynamic from 'next/dynamic';

const Lottie = dynamic(
  () => import ('lottie-react'), { ssr : false }
);

export const DelayedLottie = ({ delay = 1000, lottieProps }: {delay: number; lottieProps: LottieComponentProps}) => {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return show ? <Lottie {...lottieProps} /> : null;
}