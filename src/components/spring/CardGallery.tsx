import Image from 'next/image';

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
          <p className={'text-center'}>사진을 눌러 보세요.</p>
        </div>
        <div className={'grid grid-rows-4 grid-cols-2 grid-flow-col gap-3 flex-1 mx-3 my-8'}>
          <div className={'relative bg-blue-200'}>
            <Image
              fill={true}
              src="/gallery/cards/safari01.jpg"
              sizes="(max-width: 640px) 100vw"
              alt={'메인 사진'}
              className={'object-cover rounded-md'}
            />
          </div>
          <div className={'relative row-span-2 bg-blue-200'}>
            <Image
              fill={true}
              src="/gallery/cards/safari02.jpeg"
              sizes="(max-width: 640px) 100vw"
              alt={'메인 사진'}
              className={'object-cover rounded-md'}
            />
          </div>
          <div className={'relative bg-blue-200'}>
            <Image
              fill={true}
              src="/gallery/cards/safari03.jpg"
              sizes="(max-width: 640px) 100vw"
              alt={'메인 사진'}
              className={'object-cover rounded-md'}
            />
          </div>
          <div className={'relative row-span-2 bg-blue-200'}>
            <Image
              fill={true}
              src="/gallery/cards/safari04.jpeg"
              sizes="(max-width: 640px) 100vw"
              alt={'메인 사진'}
              className={'object-cover rounded-md'}
            />
          </div>
          <div className={'relative row-span-2 bg-blue-200'}>
            <Image
              fill={true}
              src="/gallery/cards/safari05.jpeg"
              sizes="(max-width: 640px) 100vw"
              alt={'메인 사진'}
              className={'object-cover rounded-md'}
            />
          </div>
        </div>
      </div>
    </div>
  );
}