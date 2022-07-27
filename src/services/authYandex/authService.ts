import { transformToServiceId } from './apiTransformer'
import { authApi } from 'api/auth'
import { oauthApi } from 'api/authYandex'
import { apiHasError } from 'api/utils'
import { User } from 'models/user'
import { transformToUser } from 'services/auth/apiTransformer'
import { Nullable } from 'types/nullable'

export const redirectToYandex = async (): Promise<void> => {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  const redirectUri = `${process.env.REDIRECT_URL}`
  const serviceIdResponse = await oauthApi.getServiceId(redirectUri)

  if (apiHasError(serviceIdResponse)) {
    //todo переделать обработку ошибок
    alert(`Ошибка аутентификации: ${serviceIdResponse.reason}`)
    //throw new Error(`Ошибка аутентификации: ${serviceIdResponse.reason}`)
    return
  }
  const serviceId = transformToServiceId(serviceIdResponse)

  window.location.href = `https://oauth.yandex.ru/authorize?response_type=code&client_id=${serviceId}&redirect_uri=${redirectUri}`
}

const getCurrentUser = async (): Promise<User> => {
  const userDto = await authApi.getCurrentUser()

  if (apiHasError(userDto.data)) {
    throw new Error('User not found')
  }
  return transformToUser(userDto.data)
}

export const signin = async (
  code: string,
  redirectUri: string
): Promise<Nullable<User>> => {
  const responseLogin = await oauthApi.login({
    code,
    redirect_uri: redirectUri,
  })

  if (apiHasError(responseLogin)) {
    alert(`Ошибка аутентификации: ${responseLogin.reason}`)
    return null
  }

  /*   const user = await getCurrentUser()
  return user */
  return null
}
