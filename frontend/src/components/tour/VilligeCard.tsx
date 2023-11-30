import Image from 'next/image';
import StartButton from './StartButton';
import { Village } from '../../types';
interface VillageCardProps {
  village: Village;
}

function VilligeCard({ village }: VillageCardProps) {
  const isClosed = village.distance <= Number(village.radius);

  return (
    <div className="flex px-[12px] justify-between gap-4 items-center h-[70px] bg-dorong-white rounded-[10px] shadow-[0_2px_10px_0px_rgba(0,0,0,0.07)]">
      <div className="flex gap-[16px]">
        <Image
          src={`/images/village-${village.village_id}.png`}
          alt={village.village_name}
          width={85}
          height={65}
        />
        <div className="flex flex-col items-start justify-center gap-1">
          <h1 className="text-[18px] font-bold leading-[12.6px] text-dorong-black">
            {village.village_name}
          </h1>
          <p
            className={`text-[12px] font-medium leading-[12.16px] ${
              isClosed ? 'text-dorong-primary-light' : 'text-dorong-gray-4'
            }`}
          >
            {isClosed
              ? '지금 마을안에 계시네요!'
              : `${village.distance?.toFixed(2)} km`}
          </p>
        </div>
      </div>
      <StartButton type="check" />
    </div>
  );
}

export default VilligeCard;
