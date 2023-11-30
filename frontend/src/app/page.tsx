'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import Button from '../components/Button';
import Link from 'next/link';

export default function Home() {
  // useEffect(() => {
  //   if ('geolocation' in navigator) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       console.log(position.coords.latitude, position.coords.longitude);
  //     });
  //   } else {
  //     console.log('위치정보 사용 불가능');
  //   }
  // });
  return (
    <section className="relative flex flex-col h-full">
      <div className="absolute h-[230px] w-full bg-dorong-primary-light blur-[125px] top-[184px]" />
      <div className="absolute flex flex-col justify-end w-full h-full pb-[75px] items-center">
        <Image
          src="/images/main-map.png"
          alt="main-map"
          width={412}
          height={412}
          className="z-10"
        />
        <div className="w-full px-6 h-[48px]">
          <Link href="./create">
            <Button
              isAvailable={true}
              className="text-[20px] font-medium leading-[23.6px]"
            >
              여행을 시작할까요?
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
