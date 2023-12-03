import { SERVER_ADDRESS } from '../constants';
import { ImageResponse, UserProfile } from '../types';

export async function registerUserProfile(
  nickname: string,
  age: number,
  gender: string
): Promise<UserProfile> {
  const url = new URL(
    `${window.location.href.split('create')[0]}/api/data/user`
  );
  const params = { nickname, gender, age: age.toString() };
  url.search = new URLSearchParams(params).toString();
  return fetch(url, {
    method: 'POST',
  })
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .catch(console.error);
}

export async function getUserProfile(userId: number) {
  return fetch(`${SERVER_ADDRESS}/data/user/${userId}`, {
    method: 'GET',
  })
    .then((res) => res.json())
    .catch(console.error);
}
// export async function getUserItems(userId: number) {
//   return fetch(`${SERVER_ADDRESS}/data/user/${userId}/items`, {
//     method: 'GET',
//   })
//     .then((res) => res.json())
//     .catch(console.error);
// }

export async function registerUserNormalImage(
  userId: number,
  imageFile: File
): Promise<ImageResponse> {
  const formdata = new FormData();
  formdata.append('photo', imageFile);

  return fetch(`${SERVER_ADDRESS}/data/user/${userId}/pixel/normal`, {
    method: 'POST',
    body: formdata,
  })
    .then((res) => res.json())
    .catch(console.error);
}

export async function registerUserCheeringImage(
  userId: number,
  imageFile: File
): Promise<ImageResponse> {
  const formdata = new FormData();
  formdata.append('photo', imageFile);

  return fetch(`${SERVER_ADDRESS}/data/user/${userId}/pixel/cheering`, {
    method: 'POST',
    body: formdata,
  })
    .then((res) => res.json())
    .catch(console.error);
}

export async function registerUserDespairImage(
  userId: number,
  imageFile: File
): Promise<ImageResponse> {
  const formdata = new FormData();
  formdata.append('photo', imageFile);

  return fetch(`${SERVER_ADDRESS}/data/user/${userId}/pixel/despair`, {
    method: 'POST',
    body: formdata,
  })
    .then((res) => res.json())
    .catch(console.error);
}

export function getUserName() {
  return sessionStorage.getItem('userName' || '');
}

export function setUserName(userName: string) {
  sessionStorage.setItem('userName', userName);
}

export function getUserItems() {
  return JSON.parse(sessionStorage.getItem('userItems') || '[]');
}

export function setUserItems(userItems: string[]) {
  sessionStorage.setItem('userItems', JSON.stringify(userItems));
}
