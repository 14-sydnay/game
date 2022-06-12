import { ApiError } from 'Api/types'

export type LoginRequestData = {
  login: string
  password: string
}

export type LoginResponseData = Record<string, unknown> | ApiError

export type RegisterRequestData = {
  first_name: string
  second_name: string
  login: string
  email: string
  password: string
  phone: string
}

export type RegisterResponseData = { id: number } | ApiError
