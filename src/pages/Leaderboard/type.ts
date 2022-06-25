export type LeaderboardData = {
  id: number
  name: string
  score: number
  teamName: string
  imgUrl: string
}

export type FetchedData = { data: LeaderboardData }
