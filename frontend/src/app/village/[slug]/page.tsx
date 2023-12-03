'use client';

import Image from 'next/image';
import VillageDetailContainer from '../../../components/village/VillageDetailContainer';
import arrowLeft from '/public/images/arrow-large-left.svg';
import { getMissionsByVillageIdAndUserId } from '../../../service/village';
import { useEffect, useState } from 'react';
import { USER_ID_KEY } from '../../../constants';
import { Mission } from '../../../types';
import { useRouter, useSearchParams } from 'next/navigation';
import Loading from '../../../components/village/Loading';

type Props = {
  params: {
    slug: string;
  };
};

export default function VillageDetailPage({ params: { slug } }: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const villageName = useSearchParams().get('name');

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000);
  }, []);

  return isLoading ? (
    <Loading villageName={villageName} />
  ) : (
    <section className="relative min-h-screen grow bg-dorong-white">
      <div className="flex py-[17px] items-center justify-between px-3">
        <button onClick={() => router.back()}>
          <Image src={arrowLeft} alt="arrowLeft" />
        </button>
        <h2 className="text-lg font-bold">{villageName}</h2>
        <div className="w-[24px]"></div>
      </div>
      <VillageDetailContainer villageId={Number(slug)} />
    </section>
  );
}
