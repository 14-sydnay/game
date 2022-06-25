import { transformToLeaders } from '.'
import { LeaderData, LeadersParams } from 'models/forum'
import { forumApi } from 'api/forum'
import { apiHasError } from 'api/utils'

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
