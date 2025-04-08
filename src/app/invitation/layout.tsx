import { ReactNode } from 'react';
import { Viewport } from 'next';
import Script from 'next/script';

export const metadata = {
  title: '상원 ♥ 현정',
  openGraph: {
    title: '상원 ♥ 현정',
    description: `We're getting married.`,
    images : ['/gallery/main.png']
  },
}
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Also supported but less commonly used
  // interactiveWidget: 'resizes-visual',
}

export default function LayoutInvitation({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <body
      className={`text-neutral-950 font-gowunBatang flex flex-row justify-center bg-slate-100 antialiased`}
    >
      <Script src="/src/kakao/kakao.min.js" />
      <div className={'h-dvh w-screen max-w-screen-sm'}>{children}</div>
    </body>
  );
}
