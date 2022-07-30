import {
  LoginRequestData,
  ServiceIdResponseData,
  LoginResponseData,
} from './types'
import createApi from 'api/api'

const apiInstance = createApi(`${process.env.API_ENDPOINT}/oauth`)

export const oauthApi = {
  getServiceId: async (redirectUri: string): Promise<ServiceIdResponseData> => {
    const response = await apiInstance.get<ServiceIdResponseData>(
      'yandex/service-id',
      {
        params: { redirect_uri: redirectUri },
      }
    )
    return response.data
  },

  login: async (data: LoginRequestData): Promise<LoginResponseData> => {
    const response = await apiInstance.post<LoginResponseData>('yandex', {
      ...data,
    })
    return response.data
  },
}
