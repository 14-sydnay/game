import axios, { AxiosInstance } from 'axios'

axios.defaults.withCredentials = true

const createApi = (baseURL: string): AxiosInstance => {
  return axios.create({
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    baseURL: `${process.env.API_ENDPOINT}/${baseURL}`,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
}
export default createApi
