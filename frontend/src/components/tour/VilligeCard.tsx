import Image from 'next/image';
import StartButton from './StartButton';
import { UserProfile, Village } from '../../types';
import Link from 'next/link';
interface VillageCardProps {
  village: Village;
  toggleStart: boolean;
  userItems: number[];
}

function VilligeCard({ village, toggleStart, userItems }: VillageCardProps) {
  const isClosed = village?.distance <= Number(village.radius);
  const villageType = userItems.includes(village.id)
    ? 'complete'
    : isClosed
    ? 'start'
    : 'check';
  if (toggleStart && villageType === 'complete') return;
  return (
    <div className="flex px-[12px] justify-between items-center h-[70px] bg-dorong-white rounded-[10px] shadow-[0_2px_10px_0px_rgba(0,0,0,0.07)]">
      <div className="flex gap-[16px]">
        <Image
          src={`/images/village-${village.id}.png`}
          alt={village.name}
          width={85}
          height={65}
          className="w-[85px] h-[65px]"
        />
        <div className="flex flex-col items-start justify-center gap-1">
          <h1 className="text-[18px] font-bold leading-[12.6px] text-dorong-black">
            {village.name}
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
      <Link
        href={{
          pathname: `village/${village.id}`,
          query: { name: village.name },
        }}
      >
        <StartButton type={villageType} />
      </Link>
    </div>
  );
}

export default VilligeCard;
