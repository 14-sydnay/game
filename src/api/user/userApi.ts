import createApi from '../api'
//import { ApiError } from '../types'
import { ChangePasswordRequest } from './types'

const apiInstance = createApi('user')

export const userApi = {
  changePassword: (data: ChangePasswordRequest) =>
    apiInstance.put<ChangePasswordRequest>('password', { ...data }),
}
