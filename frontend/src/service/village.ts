import { Mission } from '../types';

export async function getVillageAll() {
  return fetch(`${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/data/village/all`, {
    method: 'GET',
  })
    .then((res) => res.json())
    .catch(console.error);
}
export async function getMissionsByVillageIdAndUserId(
  villageId: number,
  userId: number
): Promise<Mission[]> {
  return fetch(
    `${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/data/village/${villageId}/${userId}/missions`
  )
    .then((res) => res.json())
    .catch(console.error);
}

export async function completeMission(missionId: number) {
  return fetch(
    `${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/data/mission/${missionId}`,
    {
      method: 'PUT',
    }
  )
    .then((res) => res.json())
    .catch(console.error);
}
