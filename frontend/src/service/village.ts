export async function getVillageAll() {
  return fetch(`${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/data/village/all`, {
    method: 'GET',
  })
    .then((res) => res.json())
    .catch(console.error);
}
