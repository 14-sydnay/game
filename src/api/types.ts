export type YandexApiError = {
  reason: string
}
export type UserApiError = {
  message: string
}
export type ServerApiError = {
  message: string
}
export type ApiError = UserApiError | ServerApiError

export type UserDto = {
  id: number
  login: string
  first_name: string
  second_name: string
  display_name: string
  email: string
  phone: string
  avatar: string
}

export type ProfileDto = {
  login: string
  first_name: string
  second_name: string
  display_name: string
  email: string
  phone: string
}

export type LeadersDto = {
  data: LeaderDto
}[]

export type LeaderDto = {
  id: number
  name: string
  score: number
  teamName: string
  imgUrl: string
}
