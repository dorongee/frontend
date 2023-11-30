import Image from 'next/image';
import Button from './Button';

function VilligeCard() {
  return (
    <div className="flex px-[12px] justify-between gap-4 items-center h-[70px] bg-dorong-white rounded-[10px] shadow-[0_2px_10px_0px_rgba(0,0,0,0.07)]">
      <div className="flex gap-[16px] w-full">
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
      <div className=" w-[74px] py-[16px]">
        <Button
          isAvailable={true}
          className="flex items-center justify-center p-[8px]"
        >
          START
        </Button>
      </div>
    </div>
  );
}

export default VilligeCard;
