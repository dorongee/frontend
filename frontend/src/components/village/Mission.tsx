import { useState } from 'react';
import { MISSION_LIST } from '../../constants';
import { Mission } from '../../types';
import Button from '../Button';
import MissionItem from './MissionItem';

interface MissionProps {
  setStep: (step: number) => void;
}
export default function Mission({ setStep }: MissionProps) {
  const [completeMission, setCompleteMission] = useState<number[]>([]);
  return (
    <div className="flex flex-col items-center ">
      <div className="flex gap-2 mt-2">
        <div className="w-4 h-4 border-2 rounded-full opacity-90 border-dorong-primary-dark bg-dorong-primary-dark"></div>
        <div className="w-4 h-4 border-2 rounded-full opacity-90 border-dorong-primary-dark bg-dorong-primary-dark"></div>
        <div className="w-4 h-4 border-2 rounded-full opacity-90 border-dorong-primary-dark"></div>
      </div>
      <p className="mt-3 text-xs text-dorong-gray-5">
        5개 중 <span className="text-dorong-primary-main">3개</span>만 성공해도
        미션 클리어!
      </p>
      <ul className="flex flex-col gap-4 mt-7">
        {MISSION_LIST.map((mission, index) => (
          <MissionItem
            mission={mission}
            key={mission}
            isComplete={completeMission.includes(index)}
            completeMission={() => {
              if (!completeMission.includes(index)) {
                setCompleteMission((prev) => [...prev, index]);
              } else {
                setCompleteMission((prev) =>
                  prev.filter((mission) => mission !== index)
                );
              }
            }}
          />
        ))}
      </ul>
      <div className="w-full h-[48px] px-6 mt-10 text-dorong-white">
        <Button
          isAvailable={completeMission.length >= 3}
          onClick={() => setStep(3)}
        >
          퀴즈로 이동
        </Button>
      </div>
    </div>
  );
}
