import { useEffect, useState } from 'react';

export type CheckJoinForm = {
  joinYN: string;
  name: string;
  with: number;
};

export default function CheckJoin({currentSlideIndex}:  {currentSlideIndex: number}) {

  const [joinCheckForm, setJoinCheckForm] = useState<CheckJoinForm>({joinYN : '', name : '', with: 0});
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  useEffect(() => {
    if(joinCheckForm.joinYN && (joinCheckForm.with >= 0) && joinCheckForm.name) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
    console.log(joinCheckForm)
  }, [joinCheckForm]);

  return (
    <div
      className={`
          ${currentSlideIndex === 1 ? 'block' : 'hidden'}
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
              className={'w-[60%] h-6 bg-white rounded-sm border border-gray-300 outline-offset-2 outline-red-200 focus:outline-1'}
            />
          </div>
          <div className={'flex h-8 justify-between items-center'}>
            <label htmlFor={'input-people'} className={'w-[36%]'}>동반 가족 수</label>
            <input
              onInput={(event) => {
                const value = Number(event.currentTarget?.value);
                setJoinCheckForm(prev => {
                  return {
                    ...prev,
                    with: isNaN(value) ? 0 : value
                  };
                });
              }}
              placeholder={'0'}
              id={'input-people'} type={'number'} name={'people'}
              className={'w-[60%] h-6 bg-white rounded-sm border border-gray-300 outline-offset-2 outline-red-200 focus:outline-1'}
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
            <button className={'flex justify-center items-center h-10 w-[45%] rounded-md bg-red-200'}>전달하기</button>
          ) : (
            <button className={'flex justify-center items-center h-10 w-[45%] rounded-md bg-gray-300 opacity-40 cursor-default'}>전달하기</button>
          )}
          <button className={'flex justify-center items-center h-10 w-[45%] rounded-md bg-blue-200'}>닫기</button>
        </div>

        <div className={'flex justify-center items-center h-8 gap-5 text-xs'}><label htmlFor={'input-notToday'}>오늘 하루 그만 보기</label><input id={'input-notToday'} type={'checkbox'} name={'notToday'} /></div>
      </div>
    </div>
  );
}