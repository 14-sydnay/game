import { RegisterData } from './types'
import { RegisterRequestData } from 'Api/auth/types'
import { UserDto } from 'Api/types'

export const transformToUser = (data: UserDto): User => {
  return {
    id: data.id,
    login: data.login,
    firstName: data.first_name,
    secondName: data.second_name,
    displayName: data.display_name,
    email: data.email,
    phone: data.phone,
    avatar: `${process.env.API_ENDPOINT}/resources/${data.avatar}`,
  }
}

export const transformToRegisterRequest = (data: RegisterData): RegisterRequestData => {
  return {
    login: data.login,
    first_name: data.firstName,
    second_name: data.secondName,
    password: data.password,
    email: data.email,
    phone: data.phone,
  }
}
