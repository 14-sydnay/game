import createApi from '../api'
import { ApiError, LeadersDto } from 'api/types'
import { LeadersParams } from 'models/forum'

const apiInstance = createApi('leaderboard')

export const forumApi = {
  getLeaders: (teamName: string, params: LeadersParams) =>
    apiInstance.post<LeadersDto | ApiError>(teamName, params),
}
