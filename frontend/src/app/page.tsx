'use client';

import Image from 'next/image';
import Button from '../components/Button';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();
  return (
    <section className="relative flex flex-col h-full">
      <div className="absolute flex flex-col justify-end w-full h-full pb-[75px] items-center px-6">
        <Image
          src="/images/splash_logo.png"
          alt="splash_logo"
          width={412}
          height={412}
          className="z-10 mb-[200px]"
        />
        <div className="w-full  h-[48px]">
          <Button
            isAvailable={true}
            onClick={() => router.push('/create')}
            className="text-[20px] font-medium leading-[23.6px] text-dorong-white"
          >
            여행을 시작할까요?
          </Button>
        </div>
      </div>
    </section>
  );
}
