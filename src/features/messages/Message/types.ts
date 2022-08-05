import { Message } from 'src/server/models/thread'

/* export type OwnProps = {
  id: number
  threadId: number
  text: string
  authorId: number
  createdAt: Date
  replyMessageId?: number
} */
export type OwnProps = { message: Message }
export type Props = OwnProps
