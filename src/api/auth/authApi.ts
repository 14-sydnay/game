import createApi from '../api'
import { ApiError } from '../types'
import { UserDto } from './types'

type LoginRequestData = {
  login: string
  password: string
}

type LoginResponseData = Record<string, unknown> | ApiError

type RegisterRequestData = {
  first_name: string
  second_name: string
  login: string
  email: string
  password: string
  phone: string
}

const apiInstance = createApi('auth')

export const authApi = {
  login: (data: LoginRequestData) => apiInstance.post<LoginResponseData>('signin', { ...data }),

  getCurrentUser: () => apiInstance.get<UserDto | ApiError>('user'),

  logout: () => apiInstance.post('logout'),

  register: (data: RegisterRequestData) => apiInstance.post('signup', { data }),
}
