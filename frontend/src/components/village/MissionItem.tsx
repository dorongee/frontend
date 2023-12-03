'use client';

import Image from 'next/image';
type Props = {
  mission: string;
  isComplete: boolean;
  completeMission: () => void;
};

export default function MissionItem({
  mission,
  isComplete,
  completeMission,
}: Props) {
  return (
    <li
      className={`flex items-center bg-dorong-primary-lightlight w-[327px] h-[80px] rounded-lg gap-3 px-3 cursor-pointer`}
      onClick={completeMission}
    >
      <div className="flex items-center justify-center bg-dorong-gray-1 grow h-[56px] text-dorong-black">
        <p>{mission}</p>
      </div>
      {isComplete ? (
        <Image
          src={'/images/profile.svg'}
          width={56}
          height={56}
          alt="cheeringImg"
          className="object-cover bg-dorong-primary-light w-14 h-14"
        />
      ) : (
        <div className="w-[56px] h-[56px] bg-dorong-gray-3"></div>
      )}
    </li>
  );
}
