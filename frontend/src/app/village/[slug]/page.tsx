'use client';

import Image from 'next/image';
import VillageDetailContainer from '../../../components/village/VillageDetailContainer';
import arrowLeft from '/public/images/arrow-large-left.svg';
import { getMissionsByVillageIdAndUserId } from '../../../service/village';
import { useEffect, useState } from 'react';
import { USER_ID_KEY } from '../../../constants';
import { Mission } from '../../../types';
import { useRouter } from 'next/navigation';

type Props = {
  params: {
    slug: string;
  };
};

export default function VillageDetailPage({ params: { slug } }: Props) {
  const [missions, setMissions] = useState<Mission[]>([]);
  const [missionUpdate, setMissionUpdate] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const villageId = Number(slug);
    const userId = Number(sessionStorage.getItem(USER_ID_KEY));
    getMissionsByVillageIdAndUserId(villageId, userId).then((res) =>
      setMissions(res)
    );
  }, [missionUpdate]);

  return (
    <section className="relative min-h-screen grow bg-dorong-white">
      <div className="flex py-[17px] items-center justify-between px-3">
        <button onClick={() => router.back()}>
          <Image src={arrowLeft} alt="arrowLeft" />
        </button>
        <h2 className="text-lg font-bold">하효마을</h2>
        <div className="w-[24px]"></div>
      </div>
      <VillageDetailContainer
        missions={missions}
        onClick={() => setMissionUpdate((a) => !a)}
      />
    </section>
  );
}
