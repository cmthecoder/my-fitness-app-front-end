import * as tokenService from './tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/tenants`


const index = async () => {
  try {
    const res = await fetch(BASE_URL, {
      headers: { Authorization: `Bearer ${tokenService.getToken()}`}
    })
    return res.json()
  } catch (err) {
    console.log(err)
  }
}

export {
  index,
}