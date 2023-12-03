import Image from 'next/image';
import { VILLAGE_INFO } from '../../constants';

interface Props {
  villageId: number;
}
export default function Reward({ villageId }: Props) {
  return (
    <section className="flex flex-col w-full pt-[140px] items-center relative h-screen bg-[#fff]">
      <h1 className="text-dorong-gray-7 text-[24px] font-bold leading-[28.32px] mb-[2px]">
        '
        <strong className="text-dorong-black text-[24px] font-extrabold leading-[28.32px]">
          {VILLAGE_INFO[villageId].name}
        </strong>
        ' 마을 생산품
      </h1>
      <span className=" text-[40px] font-extrabold leading-[48px] inline-block text-dorong-primary-dark mb-[16px]">
        {VILLAGE_INFO[villageId].itemName}
      </span>
      <Image
        src={`/images/item-${villageId + 1}.png`}
        alt="item"
        width={230}
        height={230}
        className="z-10"
      />
      <p className="text-dorong-gray-7 text-[20px] font-bold leading-[23.6px] mt-[31px] z-10">
        나의 아이템에 등록되었습니다.
      </p>
      <div className="absolute bottom-0 w-full h-2/3 bg-gradient-to-b from-dorong-white to-dorong-primary-light" />
    </section>
  );
}
