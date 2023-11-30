'use client';

import Image from 'next/image';
import { ChangeEvent, MutableRefObject, useRef, useState } from 'react';
import folderImage from 'public/images/folder.svg';
import example from 'public/images/example.png';
import Select from 'react-select';
import { AGE_OPTIONS } from '../../constants';

export default function CreatePage() {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
  const [age, setAge] = useState<string>('20');
  const [sex, setSex] = useState<'man' | 'woman' | null>(null);

  const fileInput = useRef() as MutableRefObject<HTMLInputElement>;

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      const file = e.target.files[0];
      // if (file.size > MAX_IMAGE_BYTE) {
      //   notifyToast(
      //     '최대 썸네일 이미지 사이즈 10MB를 초과하였습니다.',
      //     'error'
      //   );
      //   return;
      // }
      const url = window.URL.createObjectURL(file);
      setImageFile(file);
      setImageUrl(url);
    }
  };

  return (
    <section className="">
      <div className="border-b-[1px] border-dorong-gray-4">
        <h2 className="my-4 text-lg font-bold text-dorong-black">
          나만의 아바타를 생성해볼까요?
        </h2>
      </div>
      <div className="mt-[20px] mb-[48px]">
        <div className="flex flex-col mx-auto rounded-3xl h-[250px] w-[187px] bg-dorong-gray-4">
          <input
            type="file"
            id="imageFile"
            name="imageFile"
            className="hidden"
            accept="image/*"
            ref={fileInput}
            onChange={handleFileChange}
          />
          <button
            className="relative flex items-center justify-center h-full"
            onClick={() => fileInput.current.click()}
          >
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt="profileImage"
                className="w-full h-full "
              />
            ) : (
              <Image src={example} alt="folderImage" />
            )}
          </button>
        </div>
        <p className="mt-[10px] text-sm text-dorong-gray-5">
          아바타를 생성하기 위해서는{' '}
          <span className="font-bold text-dorong-gray-6">전신 사진</span>이
          필요합니다.
        </p>
      </div>
      <div className="flex flex-col mx-6">
        <label
          className="self-start text-sm text-dorong-black mb-[10px]"
          htmlFor="nickname"
        >
          닉네임
        </label>
        <input
          className="w-full px-2 py-[10px] border-b-2 border-dorong-primary-lightlight outline-none"
          type="text"
          id="nickname"
          name="nickname"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          required
          placeholder="닉네임을 입력해주세요."
        ></input>
      </div>
      <div className="flex justify-between mx-6 mt-6">
        <div className="flex flex-col">
          <p className="self-start text-sm text-dorong-black mb-[10px]">나이</p>
          <div className="flex items-center">
            <Select
              options={AGE_OPTIONS}
              value={{ value: age, label: age }}
              onChange={(item) => setAge(item.value)}
              placeholder="나이"
              className="w-20 border-b-2 border-dorong-primary-lightlight"
            />
            <p className="ml-3 text-dorong-black">세</p>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="self-start text-sm text-dorong-black mb-[10px]">성별</p>
          <div className="flex w-[160px] justify-between">
            <div
              className={`py-[9px] px-[21px] ${
                sex === 'man'
                  ? 'text-dorong-white bg-dorong-primary-main'
                  : 'text-dorong-gray-5 border-2 border-dorong-primary-lightlight'
              }  rounded-lg`}
              onClick={() => setSex('man')}
            >
              남자
            </div>
            <div
              className={`py-[9px] px-[21px] ${
                sex === 'woman'
                  ? 'text-dorong-white bg-dorong-primary-main'
                  : 'text-dorong-gray-5 border-2 border-dorong-primary-lightlight'
              } rounded-lg`}
              onClick={() => setSex('woman')}
            >
              여자
            </div>
          </div>
        </div>
      </div>
      <button className="w-full mx-6 bg-dorong-gray-0">생성하기</button>
    </section>
  );
}
