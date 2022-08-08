import { ApiError } from 'api/types'

export type AuthorRequest = {
  userId: number
  authorName: string
  avatarUrl: string
}

export type NewThreadRequest = AuthorRequest & {
  title: string
}
export type NewThreadResponse = { data: ThreadDto } | ApiError

export type GetThreadsResponse = ThreadDto[] | ApiError

export type GetThreadResponse = ThreadDto | ApiError

export type NewThreadMessageRequest = AuthorRequest & {
  threadId: number
  text: string
  replyMessageId?: number
}
export type NewThreadMessageResponse = { data: MessageDto } | ApiError

export type GetThreadMessagesResponse = MessageDto[] | ApiError

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
  reactions: MessageReactionDto[]
}

export type AddMessageReactionDto = { userId: number; messageId: number }

export type RemoveMessageReactionDto = { userId: number; messageId: number }

export type MessageReactionDto = {
  id: number
  messageId: number
  userId: number
  createdAt: Date
}

export type MessageReactionRequest = {
  threadId: number
  messageId: number
  userId: number
}
export type AddMessageReactionRequest = MessageReactionRequest
export type AddMessageReactionResponse = { data: MessageDto } | ApiError

export type RemoveMessageReactionRequest = MessageReactionRequest
export type RemoveMessageReactionResponse = { data: MessageDto } | ApiError
