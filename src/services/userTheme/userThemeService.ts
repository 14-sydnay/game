import { transformToUserTheme } from './apiTransformer'
import { userThemeApi, UserThemeResponse } from 'api/userTheme'
import { apiHasServerError, apiHasUserError } from 'api/utils'
import { getDefaultUserTheme, ThemeName, UserTheme } from 'models/theme'

export const getUserTheme = async (userId: number): Promise<UserTheme> => {
  const userThemeResponse = (await userThemeApi.getUserTheme(userId)).data
  if (apiHasUserError(userThemeResponse)) {
    return getDefaultUserTheme(userId)
  }
  if (apiHasServerError(userThemeResponse)) {
    throw new Error(userThemeResponse.message)
  }

  //todo add validation theme name
  return transformToUserTheme(userThemeResponse)
}

export const saveUserTheme = async (
  userId: number,
  themeName: ThemeName
): Promise<UserTheme> => {
  const userThemeResponse = await userThemeApi.saveUserTheme({
    userId,
    themeName,
  })
  if (apiHasUserError(userThemeResponse)) {
    return getDefaultUserTheme(userId)
  }
  if (apiHasServerError(userThemeResponse)) {
    throw new Error(userThemeResponse.message)
  }

  //todo add validation theme name
  return transformToUserTheme(userThemeResponse.data)
}
