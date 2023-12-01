'use client';

import Image from 'next/image';
import Button from '../Button';
import { CHEERING_IMG_KEY, NORMAL_IMG_KEY } from '../../constants';
import { useRouter } from 'next/navigation';

type Props = {
  nickname: string;
};

export default function Complete({ nickname }: Props) {
  const router = useRouter();

  const productName = '마을엔';
  return (
    <section className="relative flex flex-col h-full">
      <div className="mt-[80px] text-[18px] font-bold leading-[21.6px]">
        <p>{`안녕하세요 ${nickname}님!`}</p>
        <p>{`[${productName}]과 함께 모험을`}</p>
        <p>{`떠날 준비가 끝났습니다 :)`}</p>
      </div>
      <div className="absolute h-[230px] w-full bg-dorong-primary-light blur-[125px] top-[384px]" />
      <div className="flex justify-center mt-[32px]">
        <Image
          src={'/images/avatar.png'}
          alt="main-map"
          width={155}
          height={377}
          className="z-10"
        />
      </div>
      <div className="absolute w-full px-6 bottom-12 h-[48px]">
        <Button
          isAvailable={true}
          onClick={() => {
            router.push('/village');
          }}
        >
          시작해 볼까요?
        </Button>
      </div>
    </section>
  );
}
