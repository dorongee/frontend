import Image from 'next/image';

export default function Loading() {
  return (
    <section className="relative flex flex-col h-full">
      <div className="flex flex-col h-[220px] z-10 items-center mt-[136px] gap-[30px]">
        <p className="text-[20px] font-bold leading-[23.6px] tracking-[4px] text-dorong-primary-light">
          Loading...
        </p>
        <div className="w-[277px] h-[12px] bg-[#D9D9D9] rounded-[52px] mt-2">
          <div className="h-[12px] rounded-[52px] bg-gradient-to-r from-dorong-primary-light to-dorong-primary-main animate-progress"></div>
        </div>
      </div>

      <div className="absolute flex flex-col justify-end w-full h-full pb-[109px] items-center">
        <Image
          src="/images/main-map.png"
          alt="main-map"
          width={412}
          height={412}
          className="opacity-10"
        />
      </div>
      <div className="flex flex-col items-center text-[20px] font-bold leading-[23.6px]">
        <p>
          '제주
          <strong className="text-[24px] font-bold leading-[23.6px] text-dorong-primary-main">
            {' 마을엔'}
          </strong>
          '
        </p>
        <p>무엇이 있을까요?</p>
        <p>입장할 준비를 하고 있습니다.</p>
      </div>
    </section>
  );
}
