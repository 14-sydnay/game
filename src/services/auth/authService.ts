import { authApi, transformUser } from 'Api/auth'
import { apiHasError } from 'Api/utils'

export const logout = async () => {
  await authApi.logout()
}

export const getCurrentUser = async (): Promise<Nullable<User>> => {
  const userDto = await authApi.getCurrentUser()

  if (apiHasError(userDto.data)) {
    await logout()
    return null
  }
  return transformUser(userDto.data)
}

export const signin = async (login: string, password: string): Promise<Nullable<User>> => {
  const responseLogin = await authApi.login({ login, password })

  if (apiHasError(responseLogin)) {
    alert(`Ошибка аутентификации: ${responseLogin.reason}`)
    return null
  }

  const user = await getCurrentUser()
  return user
}
