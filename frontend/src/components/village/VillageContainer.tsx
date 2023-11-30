'use client';

import Image from 'next/image';
import VilligeCard from '../../components/tour/VilligeCard';
import UserItemList from '../../components/tour/UserItem';
import { useEffect, useState } from 'react';
import { getUserItems, getUserProfile } from '../../service/user';
import { UserItem, UserProfile } from '../../types';

type Props = {
  items: {
    name: string;
    image: string;
  }[];
  villages: object[];
};

export default function VillageContainer({ items, villages }: Props) {
  const [toggleStart, setToggleStart] = useState(false);
  const toggleImgUrl = toggleStart
    ? '/images/toggle-on.svg'
    : '/images/toggle-off.svg';
  const userName = '도롱';
  const [userProfile, setUserProfile] = useState<UserProfile>();
  const [userItems, setUserItems] = useState<UserItem[]>([]);
  useEffect(() => {
    (async () => {
      const profile = await getUserProfile(1);
      const items = await getUserItems(1);
      console.log(items);
      setUserProfile(profile);
      setUserItems(items);
    })();
  }, []);

  return (
    <section className="relative flex flex-col w-full grow bg-dorong-white pb-[65px] min-h-screen">
      <div className="w-full flex justify-center items-center h-[56px] shadow-[0_2px_4px_0px_rgba(0,0,0,0.05)]">
        <h1 className="text-[18px] font-bold leading-[21.6px]">마을</h1>
      </div>
      <div className="flex gap-[16px] w-full justify-center pt-[24px]">
        <div className="w-[156px] relative">
          <Image
            src="/images/avatar.png"
            alt="main-map"
            width={80}
            height={377}
            className="absolute z-10 left-[50%] translate-x-[-50%]"
          />
        </div>
        <div className="mb-[13px]">
          <h2 className="text-[28px] font-extrabold leading-[33.6px] text-[#F3E7F9] ">
            혼저옵서예.
          </h2>
          <h3 className="text-[14px] font-bold leading-[18.2px] flex gap-[5px] items-end">
            <strong className="text-[20px] font-bold leading-[23.6px] text-dorong-primary-dark">
              {userProfile?.nickname}
            </strong>
            님
          </h3>
        </div>
      </div>

      <div className="h-[140px] rounded-l-[16px] bg-[#F3E7F9] ml-[24px] flex pl-[50%] ">
        <div className="mt-[16px] flex flex-col w-full">
          <h4 className="text-[12px] font-bold leading-[14.16px] text-dorong-gray-6 flex">
            Item
          </h4>

          <div className="relative w-full h-full overflow-x-auto scrollbar-hide">
            <div className="flex gap-[8px] absolute top-[24px]">
              {Array.from({ length: 13 }, (_, index) => index).map((index) => {
                if (userItems?.length <= index) {
                  return <UserItemList key={index} item={userItems[index]} />;
                }
                return <UserItemList key={index} />;
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between px-[24px] w-full items-center mb-[20px] mt-[48px]">
        <span className="text-dorong-black text-[20px] font-bold leading-[23.6px]">
          마을 목록
        </span>

        <div className="flex gap-[8px] items-center">
          <p className="text-[14px] font-medium leading-[18.2px] text-dorong-gray-7">
            시작하기만 보기
          </p>
          <button onClick={() => setToggleStart((prev) => !prev)}>
            <Image src={toggleImgUrl} alt="toggle-off" width={44} height={24} />
          </button>
        </div>
      </div>

      <h4 className="text-dorong-primary-light text-[16px] font-bold leading-[20px] flex px-[24px] mb-[16px]">
        마을 안에 있으면 시작 할 수 있어요!
      </h4>
      <div className="flex flex-col gap-[16px] px-[24px]">
        {[1, 2, 3, 4, 5].map((_, index) => (
          <VilligeCard key={index} />
        ))}
      </div>
    </section>
  );
}
