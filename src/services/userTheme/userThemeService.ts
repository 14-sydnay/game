import { transformToUserTheme } from './apiTransformer'
import { userThemeApi } from 'api/userTheme'
import { apiHasServerError, apiHasUserError } from 'api/utils'
import { getDefaultUserTheme, UserTheme } from 'models/theme'

export const getUserTheme = async (userId: number): Promise<UserTheme> => {
  const userThemeDto = await userThemeApi.getUserTheme(userId)

  if (apiHasUserError(userThemeDto.data)) {
    return getDefaultUserTheme(userId)
  }
  if (apiHasServerError(userThemeDto.data)) {
    throw new Error(userThemeDto.data.message)
  }

  //todo add validation theme name
  return transformToUserTheme(userThemeDto.data)
}

/* export const saveUserTheme = async (data: File) => {
  const formData = new FormData()
  formData.append('avatar', data)

  await userApi.changeAvatar(formData)
} */
