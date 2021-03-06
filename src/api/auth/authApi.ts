import {
  LoginRequestData,
  LoginResponseData,
  RegisterRequestData,
  RegisterResponseData,
} from './types'
import createApi from 'api/api'
import { ApiError, UserDto } from 'api/types'

const apiInstance = createApi('auth')

export const authApi = {
  login: (data: LoginRequestData) =>
    apiInstance.post<LoginResponseData>('signin', { ...data }),

  getCurrentUser: () => apiInstance.get<UserDto | ApiError>('user'),

  logout: () => apiInstance.post('logout'),

  register: (data: RegisterRequestData) =>
    apiInstance.post<RegisterResponseData>('signup', { ...data }),
}
