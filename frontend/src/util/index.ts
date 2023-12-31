interface VillageInfo {
  my_lat: number;
  my_lon: number;
  village_lat: number;
  village_lon: number;
}
export function checkVillageDistance({
  my_lat,
  my_lon,
  village_lat,
  village_lon,
}: VillageInfo) {
  const R = 6371; // 지구 반지름 (단위: km)
  const dLat = deg2rad(village_lat - my_lat);
  const dLon = deg2rad(village_lon - my_lon);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(my_lat)) *
      Math.cos(deg2rad(village_lat)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // 두 지점 간의 거리 (단위: km)
  return distance;
}

function deg2rad(deg: number) {
  return deg * (Math.PI / 180);
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
  sessionStorage.setItem('userItems', JSON.stringify([...new Set(userItems)]));
}
