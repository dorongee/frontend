import { SERVER_ADDRESS } from '../constants';
import { Mission, Quiz } from '../types';

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
  return fetch(`${SERVER_ADDRESS}/data/mission/${missionId}?is_complete=true`, {
    method: 'PUT',
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

export async function registerQuiz(userId: number, quizId: number) {
  return fetch(
    `${SERVER_ADDRESS}/data/user/${userId}/quiz/${quizId}?is_correct=true`,
    {
      method: 'PUT',
    }
  )
    .then((res) => res.json())
    .catch(console.error);
}

export async function getQuiz(
  villageId: number,
  userId: number
): Promise<Quiz> {
  return fetch(`${SERVER_ADDRESS}/data/village/${villageId}/${userId}}/quiz`, {
    method: 'GET',
    body: JSON.stringify({
      is_correct: true,
    }),
  })
    .then((res) => res.json())
    .catch(console.error);
}
