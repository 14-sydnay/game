import { ThreadDto } from 'api/forum/types'
import { LeaderDto } from 'api/types'
import { LeaderData } from 'src/models/forum'
import { ThreadInfo } from 'src/server/models/thread'

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
    authorName: data.author.authorName,
    avatarUrl: data.author.avatarUrl,
    created: data.createdAt,
    messageCount: 0,
    lastMessage: '',
  }
}
