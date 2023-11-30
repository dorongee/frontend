import Image from 'next/image';
import VillageDetailContainer from '../../../components/village/VillageDetailContainer';
import arrowLeft from '/public/images/arrow-large-left.svg';

type Props = {
  params: {
    slug: string;
  };
};

export default function VillageDetailPage({ params: { slug } }: Props) {
  return (
    <section className="relative min-h-screen grow bg-dorong-white">
      <div className="flex my-[17px] items-center justify-between px-3">
        <button className="">
          <Image src={arrowLeft} alt="arrowLeft" />
        </button>
        <h2 className="text-lg font-bold">하효마을</h2>
        <div className="w-[24px]"></div>
      </div>
      <VillageDetailContainer />
    </section>
  );
}
