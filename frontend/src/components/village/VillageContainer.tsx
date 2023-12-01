'use client';

import Image from 'next/image';
import VilligeCard from '../../components/tour/VilligeCard';
import UserItemList from '../../components/tour/UserItem';
import { useContext, useEffect, useState } from 'react';
import { getUserItems, getUserProfile } from '../../service/user';
import { UserItem, UserProfile, Village } from '../../types';
import { getVillageAll } from '../../service/village';
import { checkVillageDistance } from '../../app/util';
import { PositionContext } from '../../app/layout';
import { NORMAL_IMG_KEY, USER_ID_KEY } from '../../constants';

export default function VillageContainer() {
  const [hydrated, setHydrated] = useState(false);
  const [toggleStart, setToggleStart] = useState(false);
  const toggleImgUrl = toggleStart
    ? '/images/toggle-on.svg'
    : '/images/toggle-off.svg';

  const [userProfile, setUserProfile] = useState<UserProfile>();
  const [userItems, setUserItems] = useState<UserItem[]>([]);
  const [villages, setVillages] = useState<Village[]>([]);

  const pos = useContext(PositionContext);

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    (async () => {
      const userId = Number('1');
      const profile = getUserProfile(userId);
      const items = getUserItems(userId);
      Promise.all([profile, items]).then((res) => {
        setUserProfile(res[0]);
        setUserItems(res[1]);
      });
    })();
  }, []);
  useEffect(() => {
    (async () => {
      const res = await getVillageAll();
      if (!res) return;
      if (!pos || pos.latitude === 0) {
        navigator.geolocation.getCurrentPosition((position) => {
          res.forEach((village: any) => {
            village.distance = checkVillageDistance({
              my_lat: position.coords.latitude,
              my_lon: position.coords.longitude,
              village_lat: Number(village.latitude),
              village_lon: Number(village.longitude),
            });
          });
          res.sort((a, b) => {
            if (a.distance < a.radius * 5) return -1;
            if (b.distance < b.radius * 5) return 1;
            return a.distance - b.distance;
          });
          setVillages(res);
        });
      } else {
        res.forEach((village: any) => {
          village.distance = checkVillageDistance({
            my_lat: pos.latitude,
            my_lon: pos.longitude,
            village_lat: Number(village.latitude),
            village_lon: Number(village.longitude),
          });
        });
        res.sort((a, b) => {
          if (a.distance < a.radius * 5) return -1;
          if (b.distance < b.radius * 5) return 1;
          return a.distance - b.distance;
        });
        setVillages(res);
      }
    })();
  }, []);

  return (
    hydrated && (
      <section className="relative flex flex-col w-full min-h-screen grow bg-dorong-white pb-[65px]">
        <div className="w-full flex justify-center items-center h-[56px] shadow-[0_2px_4px_0px_rgba(0,0,0,0.05)]">
          <h1 className="text-[18px] font-bold leading-[21.6px]">마을</h1>
        </div>
        <div className="flex gap-[16px] w-full justify-center pt-[24px]">
          <div className="w-[156px] relative">
            <Image
              src={'/images/avatar.png'}
              alt="main-map"
              width={80}
              height={377}
              className="absolute z-10 left-[50%] translate-x-[-50%] object-cover w-auto h-auto"
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
                {Array.from({ length: 13 }, (_, index) => index).map(
                  (index) => {
                    if (userItems?.length > index) {
                      return (
                        <UserItemList
                          key={userItems[index]?.item_name}
                          item={userItems[index]}
                        />
                      );
                    }
                    return (
                      <UserItemList
                        key={`${
                          userItems
                            ? userItems[index]?.item_name + '-' + index
                            : index
                        } `}
                      />
                    );
                  }
                )}
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
              미완료만 보기
            </p>
            <button onClick={() => setToggleStart((prev) => !prev)}>
              <Image
                src={toggleImgUrl}
                alt="toggle-off"
                width={44}
                height={24}
              />
            </button>
          </div>
        </div>

        <h4 className="text-dorong-primary-light text-[16px] font-bold leading-[20px] flex px-[24px] mb-[16px]">
          마을 안에 있으면 시작 할 수 있어요!
        </h4>
        <div className="flex flex-col gap-[16px] px-[24px]">
          {villages.map((village) => (
            <VilligeCard
              key={village.village_id}
              village={village}
              toggleStart={toggleStart}
              userProfile={userProfile}
            />
          ))}
        </div>
      </section>
    )
  );
}
