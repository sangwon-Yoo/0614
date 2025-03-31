import { useEffect, useState } from 'react';
import Lottie, { LottieComponentProps } from 'lottie-react';

export const DelayedLottie = ({ delay = 1000, lottieProps }: {delay: number; lottieProps: LottieComponentProps}) => {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return show ? <Lottie {...lottieProps} /> : null;
}