import createApi from '../api'
import { YandexApiError, LeadersDto } from 'api/types'
import { LeadersParams } from 'models/forum'

const apiInstance = createApi(`${process.env.API_ENDPOINT}/leaderboard`)

export const forumApi = {
  getLeaders: (teamName: string, params: LeadersParams) =>
    apiInstance.post<LeadersDto | YandexApiError>(teamName, params),
}
