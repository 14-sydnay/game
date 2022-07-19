import { ApiError } from 'api/types'

export type UserThemeResponse = UserThemeDto | ApiError

export type SaveUserThemeRequest = {
  userId: number
  themeName: string
}
export type SaveUserThemeResponse = UserThemeDto | ApiError

export type UserThemeDto = {
  id: number
  userId: number
  themeName: string
}
