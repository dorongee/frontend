'use client';

import Image from 'next/image';
import {
  ChangeEvent,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from 'react';
import folderImage from 'public/images/folder.svg';
import Select from 'react-select';
import {
  AGE_OPTIONS,
  CHEERING_IMG_KEY,
  DESPAIR_IMG_KEY,
  MAX_IMAGE_BYTE,
  NORMAL_IMG_KEY,
  USER_ID_KEY,
} from '../../constants';
import Button from '../../components/Button';
import { Gender, SelectType } from '../../types';
import {
  registerUserCheeringImage,
  registerUserDespairImage,
  registerUserNormalImage,
  registerUserProfile,
} from '../../service/user';
import Loading from '../../components/create/loading';
import Complete from '../../components/create/complete';
import { notifyToast } from '../../service/notify';

export default function CreatePage() {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
  const [age, setAge] = useState<SelectType>({ value: 20, label: '20' });
  const [gender, setGender] = useState<Gender | null>(null);
  const [buttonActive, setButtonActive] = useState(false);
  const [currentState, setCurrentState] = useState<
    'create' | 'loading' | 'complete'
  >('create');

  const fileInput = useRef() as MutableRefObject<HTMLInputElement>;

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      const file = e.target.files[0];
      if (file.size > MAX_IMAGE_BYTE) {
        console.log('최대  이미지 사이즈 5MB를 초과하였습니다.');
        notifyToast('최대  이미지 사이즈 5MB를 초과하였습니다.', 'error');
        return;
      }
      const url = window.URL.createObjectURL(file);
      setImageFile(file);
      setImageUrl(url);
    }
  };

  const handleClick = () => {
    setCurrentState('loading');
    registerUserProfile(nickname, age.value, gender)
      .then((res) => res.user_data_id)
      .then((userId) => {
        sessionStorage.setItem(USER_ID_KEY, userId.toString());
        const normal = registerUserNormalImage(userId, imageFile);
        const cheering = registerUserCheeringImage(userId, imageFile);
        const despair = registerUserDespairImage(userId, imageFile);
        Promise.all([normal, cheering, despair]).then((res) => {
          sessionStorage.setItem(CHEERING_IMG_KEY, res[0].url);
          sessionStorage.setItem(DESPAIR_IMG_KEY, res[1].url);
          sessionStorage.setItem(NORMAL_IMG_KEY, res[2].url);
          setCurrentState('complete');
        });
      });
  };

  useEffect(() => {
    if (imageFile !== null && nickname !== '' && gender !== null)
      setButtonActive(true);
    else setButtonActive(false);
  }, [imageFile, nickname, gender]);

  return (
    <section className="flex flex-col bg-dorong-white">
      {
        {
          create: (
            <section className="relative h-full">
              <div className="border-b-[1px] border-dorong-gray-4">
                <h2 className="py-4 text-lg font-bold text-dorong-black">
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
                        width={187}
                        height={250}
                        alt="profileImage"
                        className="object-cover w-full h-full "
                      />
                    ) : (
                      <Image src={folderImage} alt="folderImage" />
                    )}
                  </button>
                </div>
                <p className="mt-[10px] text-sm text-dorong-gray-5">
                  아바타를 생성하기 위해서는{' '}
                  <span className="font-bold text-dorong-primary-light">
                    전신 사진
                  </span>
                  이 필요합니다.
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
                  <p className="self-start text-sm text-dorong-black mb-[10px]">
                    나이
                  </p>
                  <div className="flex items-center">
                    <Select
                      options={AGE_OPTIONS}
                      value={age}
                      onChange={setAge}
                      placeholder="나이"
                      className="w-20 border-b-2 border-dorong-primary-lightlight"
                    />
                    <p className="ml-3 text-dorong-black">세</p>
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className="self-start text-sm text-dorong-black mb-[10px]">
                    성별
                  </p>
                  <div className="flex w-[160px] justify-between">
                    <button
                      className={`py-[9px] px-[21px] ${
                        gender === 'male'
                          ? 'text-dorong-primary-dark bg-dorong-primary-white border-dorong-primary-dark border-2 font-bold'
                          : 'text-dorong-gray-5 border-2 border-dorong-primary-lightlight font-medium'
                      }  rounded-lg`}
                      onClick={() => setGender('male')}
                    >
                      남자
                    </button>
                    <button
                      className={`py-[9px] px-[21px] ${
                        gender === 'female'
                          ? 'text-dorong-primary-dark bg-dorong-primary-white border-dorong-primary-dark border-2 font-bold'
                          : 'text-dorong-gray-5 border-2 border-dorong-primary-lightlight font-medium'
                      } rounded-lg`}
                      onClick={() => setGender('female')}
                    >
                      여자
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-full px-6 bottom-12 h-[48px] text-dorong-white font-medium mt-[88px]">
                <Button isAvailable={buttonActive} onClick={handleClick}>
                  생성하기
                </Button>
              </div>
            </section>
          ),
          loading: <Loading />,
          complete: <Complete nickname={nickname} />,
        }[currentState]
      }
    </section>
  );
}
