import { ApiError } from 'api/types'

export type UserThemeResponse = UserThemeDto | ApiError

export type SaveUserThemeRequest = {
  userId: number
  themeName: string
}
export type SaveUserThemeResponse = { data: UserThemeDto } | ApiError

export type UserThemeDto = {
  userId: number
  themeName: string
}
