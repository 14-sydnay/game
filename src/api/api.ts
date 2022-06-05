import axios from 'axios'

axios.defaults.withCredentials = true

const createApi = (baseURL: string) => {
  return axios.create({
    baseURL: `${process.env.API_ENDPOINT}/${baseURL}`,
    headers: {
      Accepts: 'application/json',
      'Content-Type': 'application/json',
    },
  })
}
export default createApi
