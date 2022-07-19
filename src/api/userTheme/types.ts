import { YandexApiError } from 'api/types'

export type UserThemeResponse = UserThemeDto | YandexApiError

export type SaveUserThemeRequest = {
  userId: number
  themeName: string
}
export type SaveUserThemeResponse = UserThemeDto | YandexApiError

export type UserThemeDto = {
  id: number
  userId: number
  themeName: string
}
