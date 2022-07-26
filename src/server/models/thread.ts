export type ThreadInfo = {
  id: number
  title: string
  created: Date
  authorName: string
  avatarUrl: string
  messageCount: number
  lastMessage: string
}

export type MessageInfo = {
  id: number
  threadId: number
  created: Date
  authorId: number
  authorName: string
  replyMessageId?: number
  text: string
}

export type Thread = {
  id: number
  title: string
  created: Date
  authorId: number
}

export type Message = {
  id: number
  threadId: number
  created: Date
  authorId: number
  replyMessageId?: number
  text: string
}
