import { PixelUrls, UserProfile } from '../types';

export async function registerUserProfile(
  nickname: string,
  age: number,
  gender: string
): Promise<UserProfile> {
  const url = new URL(`${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/data/user`);

  const params = { nickname, gender, age: age.toString() };
  url.search = new URLSearchParams(params).toString();

  return fetch(url, {
    method: 'POST',
  })
    .then((res) => res.json())
    .catch(console.error);
}

export async function getUserProfile(userId: number) {
  return fetch(
    `${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/data/user/${userId}`,
    {
      method: 'GET',
    }
  )
    .then((res) => res.json())
    .catch(console.error);
}
export async function getUserItems(userId: number) {
  return fetch(
    `${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/data/user/${userId}/items`,
    {
      method: 'GET',
    }
  )
    .then((res) => res.json())
    .catch(console.error);
}

export async function registerUserImage(
  userId: number,
  imageFile: File
): Promise<PixelUrls> {
  const formdata = new FormData();
  formdata.append('photo', imageFile);

  return fetch(
    `${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/data/user/${userId}/pixel`,
    {
      method: 'POST',
      body: formdata,
    }
  )
    .then((res) => res.json())
    .catch(console.error);
}
