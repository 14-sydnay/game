import { ApiError, UserDto } from 'Api/types'
export type ChangePasswordRequest = {
  oldPassword: string
  newPassword: string
}

export type ChangeAvatarRequest = FormData
export type ChangeAvatarResponse = UserDto | ApiError

export type ChangeProfileRequest = {
  first_name: string
  second_name: string
  login: string
  email: string
  phone: string
  display_name: string
}
export type ChangeProfileResponse = UserDto | ApiError
