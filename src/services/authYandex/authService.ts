/// <reference types="../../../types/nullable" />
import { transformToServiceId } from './apiTransformer'
import { authApi } from 'api/auth/authApi'
import { oauthApi } from 'api/authYandex'
import { apiHasError } from 'api/utils'
import { User } from 'models/user'

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

  await authApi.signin()
  return null
}
