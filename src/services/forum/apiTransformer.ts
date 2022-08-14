import { MessageDto, MessageReactionDto, ThreadDto } from 'api/forum/types'
import { LeaderDto } from 'api/types'
import { LeaderData } from 'src/models/forum'
import { Message, MessageReaction, ThreadInfo } from 'src/server/models/thread'

export const transformToLeaders = (data: LeaderDto): LeaderData => {
  return {
    id: data.id,
    name: data.name,
    score: data.score,
    teamName: data.teamName,
    imgUrl: data.imgUrl,
  }
}
export const transformToThread = (data: ThreadDto): ThreadInfo => {
  return {
    id: data.id,
    title: data.title,
    authorId: data.authorId,
    created: data.createdAt,
    messageCount: 0,
    lastMessage: '',
  }
}
const transformToMessageReaction = (
  data: MessageReactionDto
): MessageReaction => {
  return {
    id: data.id,
    userId: data.userId,
    created: data.createdAt,
    messageId: data.messageId,
  }
}
export const transformToMessage = (data: MessageDto): Message => {
  return {
    id: data.id,
    threadId: data.threadId,
    text: data.text,
    authorId: data.authorId,
    created: data.createdAt,
    replyMessageId: data.replyMessageId,
    reactions: data.reactions
      ? data.reactions.map(transformToMessageReaction)
      : [],
  }
}
