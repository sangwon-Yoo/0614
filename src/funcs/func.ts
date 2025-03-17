import { ChangeEvent, FormEvent } from 'react';
import { CookieExpires } from '@/hooks/useCookie';

export const isOnlyNumberOnChange = (e: ChangeEvent<HTMLInputElement> | FormEvent<HTMLInputElement>): boolean => {
  const regExp = /[^0-9]/g;
  const ele = e.currentTarget;
  return !regExp.test(ele.value);
};

export const getCookie = (name: string): string => {
  let decodedValue = '';
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);

  if (parts.length === 2) decodedValue = decodeURIComponent(parts.pop()?.split(';').shift() || '');

  return decodedValue;
};

export const setCookie = ({name, value, path, expires}: {
  name: string, value: string, path?: string, expires?: CookieExpires
}) => {

  const setValue = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; `;
  const setPath = path ? `path=${path}; ` : 'path=/; '

  let setExpires: string = '';
  switch (expires) {
    case 'today' :
      const date = new Date(Date.now() + 86400e3); //지금으로부터 24시간 뒤
      date.setHours(0, 0, 0, 0); //자정으로 세팅 > 다음날 자정
      const dateEncoded = date.toUTCString(); //UTC 타임으로 변경
      setExpires = `expires=${dateEncoded}; `
      break;
    case 'thisWeek' : break; //... 추가가능
    case 'thisMonth' : break; //... 추가가능
    // ... 추가 가능
    default : setExpires = ''; break;
  }

  document.cookie = setValue + setPath + setExpires;
};