import { ReactNode } from 'react';
import { Viewport } from 'next';

export const metadata = {
  title: '현정 ♥ 상원',
  openGraph: {
    title: '현정 ♥ 상원',
    description: `We're getting married.`,
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
  return children;
}
