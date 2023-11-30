'use client';

import Image from 'next/image';
import villageExample from '/public/images/village-detail-example.png';
import Button from '../Button';
import { useState } from 'react';

const dummy = [
  '먹태깡 맛있게 먹기',
  '먹태깡 맛있게 먹기',
  '먹태깡 맛있게 먹기',
  '먹태깡 맛있게 먹기',
  '먹태깡 맛있게 먹기',
];

export default function VillageDetailContainer() {
  const [step, setStep] = useState<number>(1);

  const [completedMissions, setCompletedMissions] = useState([]);

  const [clickedType, setClickedType] = useState<'O' | 'X' | '-'>('-');
  const OImgUrl = clickedType === 'O' ? '/images/O-blue.svg' : '/images/O.svg';
  const XImgUrl = clickedType === 'X' ? '/images/X-red.svg' : '/images/X.svg';
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
                <div className="absolute flex gap-2 transform -translate-x-1/2 -translate-y-1/2 top-4 left-1/2">
                  <div className="w-4 h-4 border-2 rounded-full border-dorong-primary-dark bg-dorong-primary-dark"></div>
                  <div className="w-4 h-4 border-2 rounded-full border-dorong-primary-dark"></div>
                  <div className="w-4 h-4 border-2 rounded-full border-dorong-primary-dark"></div>
                </div>
              </div>
              <p className="mt-[52px] mx-5 text-sm text-dorong-gray-7">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolores, dolore, nihil optio aliquam ipsum quidem debitis at
                consequuntur unde, deserunt laudantium mollitia eligendi esse
                dolorem possimus quis fugiat rem velit.
              </p>
              <div className="absolute w-full h-[48px] px-6 bottom-12">
                <Button isAvailable={true} onClick={() => setStep(2)}>
                  다음 퀘스트로 이동
                </Button>
              </div>
            </section>
          ),
          2: (
            <div className="flex flex-col items-center ">
              <div className="flex gap-2 mt-2">
                <div className="w-4 h-4 border-2 rounded-full border-dorong-primary-dark bg-dorong-primary-dark"></div>
                <div className="w-4 h-4 border-2 rounded-full border-dorong-primary-dark bg-dorong-primary-dark"></div>
                <div className="w-4 h-4 border-2 rounded-full border-dorong-primary-dark"></div>
              </div>
              <p className="mt-3 text-xs text-dorong-gray-5">
                5개 중 3개만 성공해도 미션 클리어!
              </p>
              <ul className="flex flex-col gap-4 mt-7">
                {dummy.map((text, idx) => (
                  <li
                    key={idx}
                    className="flex items-center bg-dorong-gray-4 w-[327px] h-[80px] rounded-lg gap-3 px-3"
                  >
                    <div className="flex items-center justify-center bg-dorong-gray-1 grow h-[56px] text-dorong-black">
                      <p>{text}</p>
                    </div>
                    <div className="w-[56px] h-[56px] bg-dorong-gray-3"></div>
                  </li>
                ))}
              </ul>
              <div className="absolute w-full h-[48px] px-6 bottom-12">
                <Button isAvailable={true} onClick={() => setStep(3)}>
                  다음 퀘스트로 이동
                </Button>
              </div>
            </div>
          ),
          3: (
            <section className="relative flex flex-col items-center w-full">
              <div className="flex gap-2 mt-2">
                <div className="w-4 h-4 border-2 rounded-full border-dorong-primary-dark bg-dorong-primary-dark"></div>
                <div className="w-4 h-4 border-2 rounded-full border-dorong-primary-dark bg-dorong-primary-dark"></div>
                <div className="w-4 h-4 border-2 rounded-full border-dorong-primary-dark bg-dorong-primary-dark"></div>
              </div>
              <p className="mt-[74px] text-[36px] font-extrabold leading-[43.2px] text-dorong-primary-light mb-[8px]">
                Q
              </p>
              <div className="px-[24px] mb-[100px]">
                <div className="w-full border-dorong-primary-light border-[2px]">
                  <p className="text-[20px] font-bold leading-[23.6px] text-dorong-black px-[36px] py-[23px] ">
                    이 마을은 전통적인 제주도 가옥과 아름다운 풍경으로
                    유명한가요?
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
          ),
        }[step]
      }
    </section>
  );
}
