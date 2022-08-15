import { transformToLeaders } from '.'
import { forumApi } from 'api/forum'
import { LeaderDto, LeadersDto } from 'api/types'
import { apiHasError } from 'api/utils'
import { LeaderData, LeadersParams } from 'models/forum'

export const getLeaders = async (
  teamName: string,
  params: LeadersParams
): Promise<LeaderData[]> => {
  const leadersDto = await forumApi.getLeaders(teamName, params)

  if (apiHasError(leadersDto.data)) {
    throw new Error('Список лидеров не найден')
  }
  return leadersDto.data.map((lider) => transformToLeaders(lider.data))
}

export const setLeader = async (
  userId: number,
  userName: string,
  score: number,
  userAvatarUrl: string
): Promise<void> => {
  const dto: LeaderDto = {
    id: userId,
    name: userName,
    score,
    teamName: 'sydney',
    imgUrl: userAvatarUrl,
  }
  const response = await forumApi.setLeader(dto)

  if (apiHasError(response)) {
    throw new Error('Ошибка сохранения баллов игрока.')
  }
}
