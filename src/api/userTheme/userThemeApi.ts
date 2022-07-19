import createApi from '../api'
import {
  UserThemeResponse,
  SaveUserThemeRequest,
  SaveUserThemeResponse,
} from './types'

const apiInstance = createApi(`api/v1/users`)

export const userThemeApi = {
  getUserTheme: (userId: number) =>
    apiInstance.get<UserThemeResponse>(`/${userId}/theme`),

  saveUserTheme: (data: SaveUserThemeRequest): Promise<SaveUserThemeResponse> =>
    apiInstance.post<SaveUserThemeRequest, SaveUserThemeResponse>('', data),
}
