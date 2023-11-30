export async function registerUserProfile(
  nickname: string,
  age: number,
  gender: string
) {
  return fetch(`${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/data/user`, {
    method: 'POST',
    // body: formdata,
    credentials: 'include',
  })
    .then((res) => res.json())
    .catch(console.error);
}

export async function getUserProfile(userId: number) {
  console.log(process.env.NEXT_PUBLIC_SERVER_ADDRESS);
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
  console.log(process.env.NEXT_PUBLIC_SERVER_ADDRESS);
  return fetch(
    `${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/data/user/${userId}/items`,
    {
      method: 'GET',
    }
  )
    .then((res) => res.json())
    .catch(console.error);
}
