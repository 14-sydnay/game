import { ApiError } from 'api/types'

export type NewThreadRequest = {
  title: string
  userId: number
  authorName: string
  avatarUrl: string
}
export type NewThreadResponse = { data: ThreadDto } | ApiError

export type GetThreadsResponse = ThreadDto[] | ApiError

export type GetThreadResponse = ThreadDto | ApiError

export type NewThreadMessageRequest = {
  threadId: number
  userId: number
  text: string
  authorName: string
  avatarUrl: string
  replyMessageId?: number
}
export type NewThreadMessageResponse = { data: MessageDto } | ApiError

export type GerThreadMessagesResponse = MessageDto[] | ApiError

export type NewThreadDto = {
  title: string
  userId: number
  authorName: string
  avatarUrl: string
}

export type ThreadDto = {
  id: number
  title: string
  authorId: number
  createdAt: Date
}

export type NewThreadMessageDto = {
  threadId: number
  userId: number
  authorName: string
  avatarUrl: string
  text: string
  replyMessageId?: number
}

export type MessageDto = {
  id: number
  threadId: number
  authorId: number
  text: string
  createdAt: Date
  replyMessageId?: number
}
