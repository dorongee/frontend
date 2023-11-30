import Image from 'next/image';
import VilligeCard from '../../components/VilligeCard';
import UserItemList from '../../components/UserItem';

export default function Tour() {
  const userName = '도롱';
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
              {userName}
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

          <div className="relative w-full h-full overflow-x-auto">
            <div className="flex gap-[8px] absolute top-[24px]">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
                <UserItemList key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="px-[24px] mt-[28px] mb-[20px] w-full flex gap-[8px] items-center">
        <Image
          src="/images/toggle-off.svg"
          alt="toggle-off"
          width={44}
          height={24}
        />
        <p className="text-[14px] font-medium leading-[18.2px] text-dorong-gray-7">
          START만 보기
        </p>
      </div>

      <div className="flex flex-col gap-[16px] px-[24px]">
        {[1, 2, 3, 4, 5].map((_, index) => (
          <VilligeCard key={index} />
        ))}
      </div>
    </section>
  );
}
