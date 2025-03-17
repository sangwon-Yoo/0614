import { useEffect, useState } from "react";
import { getCookie, setCookie } from '@/funcs/func';

export type CookieExpires = 'today' | 'thisWeek' | 'thisMonth';

//useYNWithCookie
export const useUsabilityWithCookie = (cookieName: string, expires: CookieExpires) => {

    const [usableYN, setUsableYN] = useState<boolean>(true);
    const [initUsability, setInitUsability] = useState<boolean>(false);

    useEffect(() => {
        setInitUsability(!(getCookie(cookieName) === 'Y'));
    }, []);

    useEffect(() => {
        if(!usableYN) {
            // 다음 마운트시 initUsability = false 로 만든다.
            setCookie({
                name : cookieName,
                value : 'Y',
                expires : expires
            });
        }
    }, [usableYN]);

    return { initUsability, setUsableYN };
};