'use client';

import Image from 'next/image';
import villageExample from '/public/images/village-detail-example.png';
import Button from '../Button';
import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { PositionContext } from '../../app/layout';
import { checkVillageDistance } from '../../util';
import { VILLAGE_INFO } from '../../constants';
import Mission from './Mission';
import Quiz from './Quiz';
import Reward from './Reward';

type Props = {
  villageId: number;
  userName: string;
};

export default function VillageDetailContainer({ villageId, userName }: Props) {
  const [step, setStep] = useState<number>(1);

  const [isClosed, setIsClosed] = useState(false);

  const router = useRouter();
  const pos = useContext(PositionContext);
  const [village] = VILLAGE_INFO.filter((village) => village.id === villageId);

  useEffect(() => {
    const distance = checkVillageDistance({
      my_lat: pos.latitude,
      my_lon: pos.longitude,
      village_lat: Number(village.latitude),
      village_lon: Number(village.longitude),
    });
    setIsClosed(distance <= Number(village.radius) || userName === '도롱이');
  }, [village]);

  useEffect(() => {
    if (step === 4) {
      setTimeout(() => {
        router.push('/village');
      }, 2000);
    }
  }, [step]);

  return (
    <section>
      {
        {
          1: (
            <section>
              <div className="relative">
                <Image
                  src={villageExample}
                  alt="villageImg"
                  className="object-cover w-full shadow-bottom"
                />
                {!isClosed ? (
                  <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-8 px-8 py-1 left-1/2 w-[327px] bg-dorong-orange-light text-xs rounded-md border-2 border-dorong-orange-main">
                    아직[{village?.name}]에 도착하지 않았습니다.
                    {village?.name}에 도착하면 퀘스트를 수행할 수 있어요.
                  </div>
                ) : (
                  <div className="absolute flex gap-2 transform -translate-x-1/2 -translate-y-1/2 top-4 left-1/2">
                    <div className="w-4 h-4 border-2 rounded-full opacity-50 border-dorong-primary-dark bg-dorong-primary-dark"></div>
                    <div className="w-4 h-4 border-2 rounded-full opacity-50 border-dorong-primary-dark"></div>
                    <div className="w-4 h-4 border-2 rounded-full opacity-50 border-dorong-primary-dark"></div>
                  </div>
                )}
              </div>
              <p className="mt-[52px] mx-5 text-sm text-dorong-gray-7">
                {village?.description}
              </p>
              <div className="absolute w-full h-[48px] px-6 bottom-12 text-dorong-white">
                <Button isAvailable={isClosed} onClick={() => setStep(2)}>
                  퀘스트로 이동
                </Button>
              </div>
            </section>
          ),
          2: <Mission setStep={setStep} />,
          3: <Quiz setStep={setStep} village={village} />,
          4: <Reward village={village} />,
        }[step]
      }
    </section>
  );
}
