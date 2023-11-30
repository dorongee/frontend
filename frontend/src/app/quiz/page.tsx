'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Quiz() {
  const [clickedType, setClickedType] = useState<'O' | 'X' | '-'>('-');
  const OImgUrl = clickedType === 'O' ? '/images/O-blue.svg' : '/images/O.svg';
  const XImgUrl = clickedType === 'X' ? '/images/X-red.svg' : '/images/X.svg';
  return (
    <section className="relative flex flex-col w-full">
      <div className="w-full flex justify-center items-center h-[56px] shadow-[0_2px_4px_0px_rgba(0,0,0,0.05)] mb-[28px]">
        <h1 className="text-[18px] font-bold leading-[21.6px]">하효마을</h1>
      </div>

      <h2 className="text-[14px] font-bold text-dorong-gray-6 leading-[18.2px]">
        마지막 확인 퀘스트
      </h2>
      <p className="mt-[74px] text-[36px] font-extrabold leading-[43.2px] text-dorong-primary-light mb-[8px]">
        Q
      </p>
      <div className="px-[24px] mb-[100px]">
        <div className="w-full border-dorong-primary-light border-[2px]">
          <p className="text-[20px] font-bold leading-[23.6px] text-dorong-black px-[36px] py-[23px] ">
            이 마을은 전통적인 제주도 가옥과 아름다운 풍경으로 유명한가요?
          </p>
        </div>
      </div>
      <div className="flex justify-center gap-[52px] w-full">
        <button onClick={() => setClickedType('O')}>
          <Image src={OImgUrl} alt="O" width={120} height={120} />
        </button>
        <button onClick={() => setClickedType('X')}>
          <Image src={XImgUrl} alt="X" width={120} height={120} />
        </button>
      </div>
    </section>
  );
}
