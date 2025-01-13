export default function CardDate() {

  const monthDays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

  return (
    <div className={'relative h-full flex flex-col'}>
      <div
        className={'flex flex-col justify-center items-center flex-none h-24'}
      >
        <span className={'font-greatVibes text-lg'}>Date</span>
      </div>
      <div className={'flex flex-col flex-1'}>

        <div className={'flex justify-center items-center flex-initial h-1/6 bg-blue-300'}>
          <span>2025년 06월</span>
        </div>

        <div className={'flex-initial h-3/6 bg-blue-700'}>
          <div className={'grid grid-cols-7'}>
            {monthDays.map((day, index) => <div key={index}>{day}</div>)}
          </div>
        </div>

        <div className={'flex-initial h-2/6 bg-blue-100'}>
          D-78
        </div>

      </div>
    </div>
  );
}
