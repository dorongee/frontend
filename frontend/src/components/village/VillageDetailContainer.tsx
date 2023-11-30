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
                  <div className="w-4 h-4 border-2 rounded-full border-dorong-primary-dark bg-dorong-primary-dark"></div>
                  <div className="w-4 h-4 border-2 rounded-full border-dorong-primary-dark"></div>
                </div>
              </div>
              <p className="mt-[52px] mx-5 text-sm text-dorong-gray-7">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolores, dolore, nihil optio aliquam ipsum quidem debitis at
                consequuntur unde, deserunt laudantium mollitia eligendi esse
                dolorem possimus quis fugiat rem velit.
              </p>
              <div className="absolute w-full px-6 bottom-12">
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
                {dummy.map((text) => (
                  <li className="flex items-center bg-dorong-gray-4 w-[327px] h-[80px] rounded-lg gap-3 px-3">
                    <div className="flex items-center justify-center bg-dorong-gray-1 grow h-[56px] text-dorong-black">
                      <p>{text}</p>
                    </div>
                    <div className="w-[56px] h-[56px] bg-dorong-gray-3"></div>
                  </li>
                ))}
              </ul>
              <div className="absolute w-full px-6 bottom-12">
                <Button isAvailable={true} onClick={() => setStep(2)}>
                  다음 퀘스트로 이동
                </Button>
              </div>
            </div>
          ),
          3: <div>hello</div>,
        }[step]
      }
    </section>
  );
}
