import { ReactNode } from 'react';

export default function LayoutInvitation({
  children,
}: Readonly<{ children: ReactNode }>) {
  return <div className={'bg-slate-600'}>{children}</div>;
}
