import { ApiError } from 'api/types'

export type AuthorResponse = AuthorDto[] | ApiError

export type AuthorDto = {
  id: number
  userId: number
  name: string
  avatarUrl: string
}
