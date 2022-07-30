import { AxiosInstance, AxiosResponse } from 'axios'

import { AuthorResponse } from './types'
import createApi from 'api/api'
import isServer from 'src/client/utils/isServer'
let apiInstance: AxiosInstance
//const apiInstance = createApi(`api/v1/authors`)
if (isServer) {
  apiInstance = createApi(
    `http://localhost:${process.env.PORT || 3000}/api/v1/authors`
  )
} else {
  apiInstance = createApi(`api/v1/authors`)
}

export const authorsApi = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getAuthors: (): Promise<AxiosResponse<AuthorResponse, any>> =>
    apiInstance.get<AuthorResponse>('/'),
}
