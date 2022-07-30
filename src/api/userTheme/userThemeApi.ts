import { AxiosResponse } from 'axios'

import createApi from '../api'
import {
  UserThemeResponse,
  SaveUserThemeRequest,
  SaveUserThemeResponse,
} from './types'

const apiInstance = createApi(`/api/v1/users`)

export const userThemeApi = {
  getUserTheme: (
    userId: number
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ): Promise<AxiosResponse<UserThemeResponse, any>> =>
    apiInstance.get<UserThemeResponse>(`/${userId}/theme`),

  saveUserTheme: (data: SaveUserThemeRequest): Promise<SaveUserThemeResponse> =>
    apiInstance.post<SaveUserThemeRequest, SaveUserThemeResponse>(
      `/${data.userId}/theme`,
      data
    ),
}
