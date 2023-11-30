'use client';

import Image from 'next/image';
import { UserProfile, Village } from '../../types';

interface LoadingPageProps {
  village: Village;
  userProfile: UserProfile;
}
export default function LoadingPage({
  village,
  userProfile,
}: LoadingPageProps) {
  const villigeName = '하효';
  return (
    <section className="flex flex-col w-full py-[60px] h-screen justify-between bg-[#fff]">
      <div className="h-[100px]">
        <div className="flex animate-loading">
          {Array.from({ length: 13 }, (_, i) => (
            <Image
              src={`/images/item-${i}.png`}
              alt="item"
              width={100}
              height={100}
              key={i}
            />
          ))}
        </div>
      </div>
      <div>
        <p className="text-dorong-gray-7 text-[28px] font-medium leading-[33.6px]">
          <strong className="text-dorong-primary-main font-extrabold leading-[33.6px]">
            {/* {village.village_name} */}
            '하효'
          </strong>
          로 가는중...
        </p>
        <div className="flex justify-center w-full mt-[60px]">
          <Image
            src="/images/avatar.png"
            // src={`/images/village-${village.village_id}.png`}
            alt="avatar"
            width={80}
            height={200}
            className="w-auto h-auto"
          />
        </div>
      </div>

      <div className="h-[100px]">
        <div className="flex animate-loading">
          {Array.from({ length: 13 }, (_, i) => (
            <Image
              src={`/images/item-${12 - i}.png`}
              alt="item"
              width={100}
              height={100}
              key={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
