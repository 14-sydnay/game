import createApi from '../api'
import {
  ChangePasswordRequest,
  ChangeAvatarRequest,
  ChangeAvatarResponse,
  ChangeProfileRequest,
  ChangeProfileResponse,
} from './types'

const apiInstance = createApi(`${process.env.API_ENDPOINT}/user`)

export const userApi = {
  changePassword: (data: ChangePasswordRequest) =>
    apiInstance.put<ChangePasswordRequest>('password', { ...data }),

  changeAvatar: (data: ChangeAvatarRequest) =>
    apiInstance.put<ChangeAvatarRequest, ChangeAvatarResponse>(
      'profile/avatar',
      data
    ),

  changeProfile: (data: ChangeProfileRequest) =>
    apiInstance.put<ChangeProfileRequest, ChangeProfileResponse>('profile', {
      ...data,
    }),
}
