/// <reference types="../../../types/nullable" />
import { transformToRegisterRequest, transformToUser } from './apiTransformer'
import { RegisterData } from './types'
import { authApi } from 'api/auth/authApi'
import { authPracticumApi } from 'api/authPracticum'
import { apiHasError } from 'api/utils'
import { User } from 'src/models/user'

export const logout = async (): Promise<void> => {
  await authPracticumApi.logout()
  await authApi.signout()
}

export const getCurrentUser = async (): Promise<User> => {
  const userDto = await authPracticumApi.getCurrentUser()

  if (apiHasError(userDto.data)) {
    throw new Error('User not found')
  }
  return transformToUser(userDto.data)
}

export const signin = async (
  login: string,
  password: string
): Promise<Nullable<User>> => {
  const responseLogin = await authPracticumApi.login({ login, password })

  if (apiHasError(responseLogin)) {
    alert(`Ошибка аутентификации: ${responseLogin.reason}`)
    return null
  }

  const user = await getCurrentUser()
  await authApi.signin()
  return user
}

export const register = async (data: RegisterData): Promise<boolean> => {
  const registerRequest = transformToRegisterRequest(data)

  const response = await authPracticumApi.register(registerRequest)

  if (apiHasError(response)) {
    alert(`Ошибка регистрации: ${response.reason}`) //todo временно тут
    return false
  }

  return true
}
