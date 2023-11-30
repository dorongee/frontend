import { useState } from 'react';
import { Mission } from '../../types';
import Image from 'next/image';
import exampleImg from 'public/images/example.png';
import { CHEERING_IMG_KEY } from '../../constants';

type Props = {
  mission: Mission;
  onClick: () => void;
};

export default function MissionItem({ mission, onClick }: Props) {
  // const [isComplete, setIsComplete] = useState(mission.is_complete);

  return (
    <li
      className={`${
        mission.is_complete ? 'pointer-events-none	' : 'cursor-pointer'
      } flex items-center bg-dorong-gray-4 w-[327px] h-[80px] rounded-lg gap-3 px-3`}
      onClick={onClick}
    >
      <div className="flex items-center justify-center bg-dorong-gray-1 grow h-[56px] text-dorong-black">
        <p>{mission.mission_details}</p>
      </div>
      {mission.is_complete ? (
        <Image
          src={sessionStorage.getItem(CHEERING_IMG_KEY) ?? exampleImg}
          width={56}
          height={56}
          alt="cheeringImg"
          className="object-cover bg-dorong-primary-light"
        />
      ) : (
        <div className="w-[56px] h-[56px] bg-dorong-gray-3"></div>
      )}
    </li>
  );
}
