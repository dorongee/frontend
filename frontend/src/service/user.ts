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
