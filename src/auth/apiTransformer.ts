import { UserDto } from 'Api/auth/types'

export const transformUser = (data: UserDto): User => {
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
