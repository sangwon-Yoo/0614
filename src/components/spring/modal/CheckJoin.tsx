import { useCallback, useEffect, useMemo, useState } from 'react';
import { isOnlyNumberOnChange } from '@/funcs/func';
import { useUsabilityWithCookie } from '@/hooks/useCookie';

export type CheckJoinForm = {
  joinYN: string;
  name: string;
  with: string;
};
export type CheckJoinPostData = {
  attendance: string;
  name: string;
  companionCount: number;
};

export default function CheckJoin({currentSlideIndex}:  {currentSlideIndex: number}) {

  const [joinCheckForm, setJoinCheckForm] = useState<CheckJoinForm>({joinYN : '', name : '', with: ''});
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [isShowModal, setIsShowModal] = useState<boolean>(true);
  const [isStopShowToday, setIsStopShowToday] = useState<boolean>(false);
  const [isAlreadyChecked, setIsAlreadyChecked] = useState<boolean>(true);

  const localStorageKey = useMemo(() => 'isCheckedAttendance', []);

  const { initUsability, setUsableYN } = useUsabilityWithCookie(
    `attendanceYN`,
    'today'
  );

  useEffect(() => {
    if(joinCheckForm.joinYN && (Number(joinCheckForm.with) >= 0) && joinCheckForm.name) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
    console.log(joinCheckForm);
    console.log(isStopShowToday);
  }, [isStopShowToday, joinCheckForm]);

  useEffect(() => {
    if(localStorage.getItem(localStorageKey) === 'Y') {
      setIsAlreadyChecked(true);
    } else {
      setIsAlreadyChecked(false);
    }
  }, []);

  const postData = useCallback(async (data: CheckJoinForm) => {
    try{

      const inputData: CheckJoinPostData = {
        name : data.name,
        companionCount : Number(data.with),
        attendance : data.joinYN
      };

      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbzK9gbqmbmg0zmteVrA2fvaJpXWd8r6OlcvE1mUla9nIhNNg7F9TD36rfE6Tmf2LSKo/exec',
        {
          method: 'POST',
          body: JSON.stringify(inputData),
        }
      );
      console.log(response);
      return response;
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <div
      className={`
          ${((currentSlideIndex === 1) && isShowModal && initUsability && !isAlreadyChecked) ? 'block' : 'hidden'}
          fixed z-50 inset-0 bg-black/50
          flex flex-col justify-center
        `}
    >
      <div className={`flex flex-col justify-between h-1/2 mx-10 rounded-lg bg-slate-100 py-8 px-5`}>
        <p className={'flex justify-center items-center text-center text-sm'}>
          {`편안히 모시기 위해`}
          <br />
          {`참석 의사를 여쭤봅니다.`}
        </p>

        <div className={'flex flex-col text-xs'}>
          <div className={'flex h-8 justify-between items-center'}>
            <label htmlFor={'input-name'} className={'w-[36%]'}>이름</label>
            <input
              onInput={(event) => {
                const value = event.currentTarget?.value || '';
                setJoinCheckForm(prev => {
                  return {
                    ...prev,
                    name: value
                  };
                });
              }}
              id={'input-name'} type={'text'} name={'name'}
              placeholder={'홍길동'}
              className={'w-[60%] h-6 pl-1 bg-white rounded-sm border border-gray-300 outline-offset-2 outline-red-200 focus:outline-1'}
            />
          </div>
          <div className={'flex h-8 justify-between items-center'}>
            <label htmlFor={'input-people'} className={'w-[36%]'}>동반 가족 수</label>
            <input
              onInput={(event) => {
                if(!isOnlyNumberOnChange(event)) return false;
                const value = event.currentTarget?.value;

                setJoinCheckForm(prev => {
                  return {
                    ...prev,
                    with: value
                  };
                });
              }}
              value={joinCheckForm.with}
              placeholder={'0'}
              inputMode={'numeric'}
              maxLength={2}
              step={'1'}
              pattern={'\d*'}
              id={'input-people'} type={'tel'} name={'people'}
              className={'w-[60%] h-6 pl-1 bg-white rounded-sm border border-gray-300 outline-offset-2 outline-red-200 focus:outline-1'}
              onKeyDown={(event) => {
                if(event.key === '.' || event.key === ',') event.preventDefault();
              }}
            />
          </div>
          <div className={'flex h-12 justify-center items-center gap-5'}>
            <label className={'relative w-1/3 h-8'}>
              참석
              <input
                className={'appearance-none bg-white absolute inset-0 flex justify-center items-center rounded-md border border-gray-300 cursor-pointer before:content-["참석"] outline-offset-2 outline-red-200 checked:bg-red-200 checked:border-none'} type={'radio'} name={'join'} value={'Y'}
                onChange={event => setJoinCheckForm(prev => {
                  const value = event.target?.value;
                  return { ...prev, joinYN : value || 'N' };
                })}
              />
            </label>
            <label className={'relative w-1/3 h-8'}>
              불참
              <input
                className={'appearance-none bg-white absolute inset-0 flex justify-center items-center rounded-md border border-gray-300 cursor-pointer before:content-["불참"] outline-offset-2 outline-red-200  checked:bg-red-200 checked:border-none'} type={'radio'} name={'join'} value={'N'}
                onChange={event => setJoinCheckForm(prev => {
                  const value = event.target?.value;
                  return { ...prev, joinYN : value || 'N' };
                })}
              />
            </label>
          </div>
        </div>

        <div className={'flex justify-between items-center text-xs'}>
          {isFormValid ? (
            <button
              className={'flex justify-center items-center h-10 w-[45%] rounded-md ring-2 ring-red-200 bg-white hover:bg-red-200'}
              onClick={() => {
                postData(joinCheckForm).then(() => {
                  localStorage.setItem(localStorageKey, 'Y');
                });
                setIsShowModal(false);
              }}
            >
              전달하기
            </button>
          ) : (
            <button className={'flex justify-center items-center h-10 w-[45%] rounded-md bg-gray-300 opacity-40 cursor-default'}>전달하기</button>
          )}
          <button
            onClick={() => {
              if(isStopShowToday) {
                setUsableYN(false);
              }
              setIsShowModal(false);
            }}
            className={'flex justify-center items-center h-10 w-[45%] rounded-md ring-2 ring-blue-200 bg-white hover:bg-blue-200'}
          >
            닫기
          </button>
        </div>

        <div className={'flex justify-center items-center h-8 gap-5 text-xs'}>
          <label htmlFor={'input-notToday'}>오늘 하루 그만 보기</label>
          <input
            id={'input-notToday'}
            type={'checkbox'}
            name={'notToday'}
            checked={isStopShowToday}
            onChange={event => setIsStopShowToday(event.target.checked)}
          />
        </div>
      </div>
    </div>
  );
}