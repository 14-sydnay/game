import { ApiError } from 'api/types'

export type NewThreadRequest = {
  title: string
  userId: number
  authorName: string
  avatarUrl: string
}
export type NewThreadResponse = { data: ThreadDto } | ApiError

export type GetThreadsResponse = ThreadDto[] | ApiError

/* export type GetThreadRequest = {
  id: number
} */
//export type GetThreadResponse = { data: ThreadDto } | ApiError
export type GetThreadResponse = ThreadDto | ApiError

export type NewThreadDto = {
  title: string
  userId: number
  authorName: string
  avatarUrl: string
}

export type ThreadDto = {
  id: number
  title: string
  author: {
    authorName: string
    avatarUrl: string
  }
  createdAt: Date
}
