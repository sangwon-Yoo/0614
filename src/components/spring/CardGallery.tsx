export default function CardGallery() {

  return (
    <div className={'relative h-full flex flex-col'}>
      <div
        className={'flex flex-col justify-center items-center flex-none h-24'}
      >
        <span className={'font-greatVibes text-lg'}>Gallery</span>
      </div>
      <div className={'flex flex-col flex-1'}>
        <div className={'my-6'}>
          <p className={'text-center'}>사진을 선택하면 크게 보실 수 있습니다.</p>
        </div>
        <div className={'grid grid-rows-4 grid-cols-2 grid-flow-col gap-3 flex-1 mx-3 my-8'}>
          <div className={'bg-blue-200'}>01</div>
          <div className={'row-span-2 bg-blue-200'}>02</div>
          <div className={'bg-blue-200'}>03</div>
          <div className={'row-span-2 bg-blue-200'}>04</div>
          <div className={'row-span-2 bg-blue-200'}>05</div>
        </div>
      </div>
    </div>
  );
}