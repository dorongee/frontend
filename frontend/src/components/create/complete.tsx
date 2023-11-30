import Image from 'next/image';
import Button from '../Button';

export default function Complete() {
  const name = '도롱';
  const productName = '프로젝트명';
  return (
    <section className="relative flex flex-col h-full">
      <div className="mt-[80px] text-[18px] font-bold leading-[21.6px]">
        <p>{`안녕하세요 ${name}님!`}</p>
        <p>{`[${productName}]과 함께 모험을`}</p>
        <p>{`떠날 준비가 끝났습니다 :)`}</p>
      </div>
      <div className="absolute h-[230px] w-full bg-dorong-primary-light blur-[125px] top-[384px]" />
      <div className="flex justify-center mt-[32px]">
        <Image
          src="/images/avatar.png"
          alt="main-map"
          width={155}
          height={377}
          className="z-10"
        />
      </div>

      <div className="absolute flex flex-col justify-end w-full h-full pb-[75px] items-center">
        <div className="w-full px-6">
          <Button
            isAvailable={true}
            className="text-[20px] font-medium leading-[23.6px]"
          >
            시작해 볼까요?
          </Button>
        </div>
      </div>
    </section>
  );
}
