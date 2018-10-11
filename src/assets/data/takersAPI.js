const api = "https://hr.oat.taocloud.org/v1";
const headers = {
  'Accept': 'application/json',
}

export const getAll = () =>
  fetch(`${api}/users?limit=100`, { headers })
    .then(res => res.json())
    .catch(err => console.log(err))

export const getTaker = (takersID) =>
  fetch(`${api}/user/${takersID}`, { headers })
    .then(res => res.json())
    .catch(err => console.log(err))
