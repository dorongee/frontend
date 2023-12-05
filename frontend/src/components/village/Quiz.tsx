'use client';
import Image from 'next/image';
import Button from '../Button';
import { Dispatch, SetStateAction, useState } from 'react';
import Link from 'next/link';
import { getUserItems, setUserItems } from '../../util';

interface Props {
  setStep: Dispatch<SetStateAction<number>>;
  village: any;
}
export default function Quiz({ setStep, village }: Props) {
  const [clickedType, setClickedType] = useState<'O' | 'X' | '-'>('-');
  const [modalOpen, setModalOpen] = useState(false);

  const OImgUrl = clickedType === 'O' ? '/images/O-blue.svg' : '/images/O.svg';
  const XImgUrl = clickedType === 'X' ? '/images/X-red.svg' : '/images/X.svg';

  return (
    <section className="flex flex-col items-center w-full ">
      <div className="flex gap-2 mt-2">
        <div className="w-4 h-4 border-2 rounded-full opacity-50 border-dorong-primary-dark bg-dorong-primary-dark"></div>
        <div className="w-4 h-4 border-2 rounded-full opacity-50 border-dorong-primary-dark bg-dorong-primary-dark"></div>
        <div className="w-4 h-4 border-2 rounded-full opacity-50 border-dorong-primary-dark bg-dorong-primary-dark"></div>
      </div>
      <p className="mt-[74px] text-[36px] font-extrabold leading-[43.2px] text-dorong-primary-light mb-[8px]">
        Q
      </p>
      <div className="px-[24px] mb-[100px]">
        <div className="w-full border-dorong-primary-light border-[2px] rounded-xl">
          <p className="text-[20px] font-bold leading-[23.6px] text-dorong-black px-[36px] py-[23px] ">
            {village.quiz}
          </p>
        </div>
      </div>
      <div className="flex justify-center gap-[52px] w-full">
        <button onClick={() => setClickedType('O')}>
          <Image src={OImgUrl} alt="O" width={120} height={120} />
        </button>
        <button onClick={() => setClickedType('X')}>
          <Image src={XImgUrl} alt="X" width={120} height={120} />
        </button>
      </div>
      <div className=" w-full h-[48px] px-6 mt-10 text-dorong-white">
        <Button
          isAvailable={clickedType !== '-'}
          onClick={() => {
            setModalOpen(true);
          }}
        >
          완료하기
        </Button>
      </div>
      {modalOpen && (
        <div className="fixed top-0">
          <div className="w-screen h-screen opacity-50 bg-dorong-black"></div>
          <div className="absolute flex flex-col items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-dorong-white w-[327px] h-[410px] py-8 px-5 rounded-xl">
            <p className="text-2xl font-bold text-dorong-primary-dark rounded-2xl">
              {village.answer === clickedType ? '성공!' : '다시 시도해볼까요?'}
            </p>
            <Image
              src={
                village.answer === clickedType
                  ? '/images/cheering.png'
                  : '/images/in_despair.png'
              }
              width={176}
              height={176}
              alt="example"
              className="my-[50px]"
            />
            {village.answer === clickedType ? (
              <button
                className="flex justify-around w-full py-2 rounded-xl bg-dorong-primary-lightlight"
                onClick={() => {
                  const itemList = getUserItems();
                  setUserItems([...itemList, village.id]);
                  setStep(4);
                }}
              >
                아이템 받으러 가기
              </button>
            ) : (
              <div className="flex justify-around w-full">
                <Link href="/village">
                  <button
                    className="px-2 text-lg border-2 text-dorong-black rounded-xl border-dorong-primary-light"
                    onClick={() => {
                      setModalOpen(false);
                    }}
                  >
                    그만할게요 😭
                  </button>
                </Link>

                <button
                  className="px-2 text-lg border-2 text-dorong-black rounded-xl border-dorong-primary-light"
                  onClick={() => {
                    setModalOpen(false);
                  }}
                >
                  다시 시도하기 🔥
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
