import { ReactNode } from 'react';
//import { Geist, Geist_Mono } from 'next/font/google';

/*const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});*/

export default function TemplateSpring({ children }: { children: ReactNode }) {
  return (
    <body
      className={`text-neutral-950 font-gowunBatang flex flex-row justify-center bg-slate-100 antialiased`}
    >
      <div className={'h-dvh w-screen max-w-screen-sm'}>{children}</div>
    </body>
  );
}
