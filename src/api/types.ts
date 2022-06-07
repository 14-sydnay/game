export type ApiError = {
  reason: string
}

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
  login: string | undefined
  first_name: string | undefined
  second_name: string | undefined
  display_name: string | undefined
  email: string | undefined
  phone: string | undefined
}
