import { AxiosResponse } from 'axios'

import createApi from '../api'
import { YandexApiError, LeadersDto, LeaderDto } from 'api/types'
import { LeadersParams, NewLeaderParams } from 'models/forum'

const apiInstance = createApi(`${process.env.API_ENDPOINT}/leaderboard`)

export const forumApi = {
  getLeaders: (teamName: string, params: LeadersParams) =>
    apiInstance.post<LeadersDto | YandexApiError>(teamName, params),

  setLeader: (dto: LeaderDto) => {
    const params: NewLeaderParams = {
      ratingFieldName: 'score',
      teamName: dto.teamName,
    }
    return apiInstance.post<YandexApiError>('', { data: dto, ...params })
  },
}
