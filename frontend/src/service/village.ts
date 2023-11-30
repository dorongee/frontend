import { SERVER_ADDRESS } from '../constants';
import { Mission } from '../types';

export async function getVillageAll() {
  return fetch(`${SERVER_ADDRESS}/data/village/all`, {
    method: 'GET',
  })
    .then((res) => res.json())
    .catch(console.error);
}
export async function getMissionsByVillageIdAndUserId(
  villageId: number,
  userId: number
): Promise<Mission[]> {
  return fetch(`${SERVER_ADDRESS}/data/village/${villageId}/${userId}/missions`)
    .then((res) => res.json())
    .catch(console.error);
}

export async function completeMission(missionId: number) {
  return fetch(`${SERVER_ADDRESS}/data/mission/${missionId}`, {
    method: 'PUT',
    body: JSON.stringify({
      is_complete: true,
    }),
  })
    .then((res) => res.json())
    .catch(console.error);
}
export async function getVillage(villageId: number) {
  return fetch(`${SERVER_ADDRESS}/data/village/${villageId}`, {
    method: 'GET',
  })
    .then((res) => res.json())
    .catch(console.error);
}
