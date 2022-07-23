import { YandexApiError, UserDto } from 'api/types'
export type ChangePasswordRequest = {
  oldPassword: string
  newPassword: string
}

export type ChangeAvatarRequest = FormData
export type ChangeAvatarResponse = UserDto | YandexApiError

export type ChangeProfileRequest = {
  first_name: string
  second_name: string
  login: string
  email: string
  phone: string
  display_name: string
}
export type ChangeProfileResponse = UserDto | YandexApiError
