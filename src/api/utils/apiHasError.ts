import { ServerApiError, UserApiError, YandexApiError } from 'api/types'

export function hasYandexError(response: any): response is YandexApiError {
  return response && response.reason
}

export function hasUserError(response: any): response is UserApiError {
  return response && response.status >= 400 && response.status < 500
}

export function hasServerError(response: any): response is ServerApiError {
  return response && response.status >= 500
}
