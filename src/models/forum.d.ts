export type LeaderData = {
  id: number
  name: string
  score: number
  teamName: string
  imgUrl: string
}

export type LeadersParams = {
  ratingFieldName: string
  cursor: number
  limit: number
}
export type NewLeaderParams = {
  ratingFieldName: string
  teamName: string
}
