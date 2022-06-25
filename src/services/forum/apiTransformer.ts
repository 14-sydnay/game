import { LeaderDto } from 'api/types'
import { LeaderData } from 'src/models/forum'

export const transformToLeaders = (data: LeaderDto): LeaderData => {
  return {
    id: data.id,
    name: data.name,
    score: data.score,
    teamName: data.teamName,
    imgUrl: data.imgUrl,
  }
}
