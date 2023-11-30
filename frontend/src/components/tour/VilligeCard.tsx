import Image from 'next/image';
import StartButton from './StartButton';

function VilligeCard() {
  return (
    <div className="flex px-[12px] justify-between gap-4 items-center h-[70px] bg-dorong-white rounded-[10px] shadow-[0_2px_10px_0px_rgba(0,0,0,0.07)]">
      <div className="flex gap-[16px]">
        <Image
          src="/images/villige.png"
          alt="arrow-left"
          width={85}
          height={45}
        />
        <div className="flex flex-col items-start justify-center gap-1">
          <h1 className="text-[18px] font-bold leading-[12.6px] text-dorong-black">
            하효 마을
          </h1>
          <p className=" text-[12px] font-medium leading-[12.16px] text-dorong-gray-4">
            0.1 km
          </p>
        </div>
      </div>
      <StartButton type="check" />
    </div>
  );
}

export default VilligeCard;
