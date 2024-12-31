import { ReactNode } from 'react'
import { Geist, Geist_Mono } from 'next/font/google';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function TemplateSpring({ children }: { children: ReactNode }) {
  return (
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-row justify-center bg-rose-50`}>
      <div className={'h-screen w-screen max-w-screen-sm'}>
        {children}
      </div>
    </body>
  );
}
