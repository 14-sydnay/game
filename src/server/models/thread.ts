export type ForumElement = {
  id: number
  created: Date
  authorId: number
}

export type Thread = ForumElement & {
  title: string
  authorId: number
}

export type Message = ForumElement & {
  threadId: number
  replyMessageId?: number
  text: string
}
export type ThreadInfo = Thread & {
  messageCount: number
  lastMessage: string
}

export type MessageInfo = Message & {
  authorName: string
}
