'use client';

import Image from 'next/image';
import Button from '../Button';
import { useRouter } from 'next/navigation';
import Processdots from './Processdots';
import { useState } from 'react';
import { setUserItems, setUserName } from '../../app/util';

type Props = {
  nickname: string;
};

export default function Complete({ nickname }: Props) {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <section className="relative flex flex-col h-full">
      <TitleCompoenent currentPage={currentPage} nickname={nickname} />
      <div className="absolute h-[230px] w-full bg-dorong-primary-light blur-[125px] top-[384px]" />
      <div className="mt-[20px] flex justify-center">
        <Processdots currentNumber={currentPage} />
      </div>

      <div className="flex justify-between mt-[32px] px-[24px]">
        <Image
          src={'/images/arrow-small-left.svg'}
          alt="main-map"
          width={32}
          height={32}
          className={`z-10 opacity-60 ${
            currentPage === 0 && 'invisible'
          } cursor-pointer`}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        />
        <Image
          src={'/images/avatar.png'}
          alt="main-map"
          width={155}
          height={377}
          className="z-10"
        />
        <Image
          src={'/images/arrow-small-right.svg'}
          alt="main-map"
          width={32}
          height={32}
          className={`z-10 opacity-60 ${
            currentPage === 2 && 'invisible'
          } cursor-pointer`}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        />
      </div>
      <div className=" w-full px-6  h-[48px] text-dorong-white mt-10 z-10 text-[20px] leading-[23.6px] font-medium">
        <Button
          isAvailable={currentPage === 2}
          onClick={() => {
            setUserItems([]);
            setUserName(nickname);
            router.push('/village');
          }}
        >
          입장하기
        </Button>
      </div>
    </section>
  );
}

function TitleCompoenent({
  currentPage,
  nickname,
}: {
  currentPage: number;
  nickname: string;
}) {
  if (currentPage === 0)
    return (
      <div className="mt-[80px] text-[18px] font-bold leading-[21.6px] text-dorong-black">
        <p>{`안녕하세요 ${nickname}님!`}</p>
        <p>
          <strong className="text-[20px] text-dorong-primary-main leading-[21.6px] font-bold">
            마을엔
          </strong>
          과 함께 모험을
        </p>
        <p>{`떠날 준비가 끝났습니다 :)`}</p>
      </div>
    );
  if (currentPage === 1) {
    return (
      <div className="mt-[80px] text-[18px] font-bold leading-[21.6px] text-dorong-black">
        <p>{`마을마다 있는`}</p>
        <p>{'퀘스트를 수행하며'}</p>
        <p>{`아이템을 얻어보세요!`}</p>
      </div>
    );
  }
  if (currentPage === 2) {
    return (
      <div className="mt-[80px] text-[18px] font-bold leading-[21.6px] text-dorong-black">
        <p>{`제주 속 다양한 마을들을`}</p>
        <p>{'돌아다닐 준비가 되셨다면,'}</p>
        <p>{`입장하기를 눌러주세요!`}</p>
      </div>
    );
  }
}
