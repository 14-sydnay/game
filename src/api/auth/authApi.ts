import {
  LoginRequestData,
  LoginResponseData,
  RegisterRequestData,
  RegisterResponseData,
} from './types'
import createApi from 'api/api'
import { YandexApiError, UserDto } from 'api/types'

const apiInstance = createApi(`${process.env.API_ENDPOINT}/auth`)

export const authApi = {
  login: (data: LoginRequestData) =>
    apiInstance.post<LoginResponseData>('signin', { ...data }),

  getCurrentUser: () => apiInstance.get<UserDto | YandexApiError>('user'),

  logout: () => apiInstance.post('logout'),

  register: (data: RegisterRequestData) =>
    apiInstance.post<RegisterResponseData>('signup', { ...data }),
}
