import Image from 'next/image';

export default function Loading() {
  return (
    <section className="relative flex flex-col h-full">
      <div className="flex h-[220px] flex-col-reverse z-10 items-center gap-1">
        <p className="font-medium text-[16px] leading-5">Loading...</p>
        <div className="w-[277px] h-[12px] bg-[#D9D9D9] rounded-[52px] mt-2">
          <div className="h-[12px] rounded-[52px] bg-gradient-to-r from-dorong-primary-light to-dorong-primary-main animate-progress"></div>
        </div>
        <Image src="/images/loading.png" alt="loading" width={36} height={36} />
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
    </section>
  );
}
