/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { ServerApiError, ClientApiError, YandexApiError } from 'api/types'

export function hasYandexError(response: any): response is YandexApiError {
  return response && response.reason
}

export function hasClientError(response: any): response is ClientApiError {
  return response && response.status >= 400 && response.status < 500
}

export function hasServerError(response: any): response is ServerApiError {
  return response && response.status >= 500
}
