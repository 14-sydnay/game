import { transformProfileToDto } from './apiTransformer'
import { ProfileData } from './types'
import { userApi } from 'api/user'

export const changePassword = async (oldPassword: string, newPassword: string) => {
  await userApi.changePassword({ oldPassword, newPassword })
}

export const changeAvatar = async (data: File) => {
  const formData = new FormData()
  formData.append('avatar', data)

  await userApi.changeAvatar(formData)
}

export const chaneProfile = async (data: ProfileData) => {
  const dto = transformProfileToDto(data)
  await userApi.changeProfile(dto)
}
