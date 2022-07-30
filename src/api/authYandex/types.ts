import { YandexApiError } from 'api/types'

export type ServiceIdDto = { service_id: string }
export type ServiceIdResponseData = ServiceIdDto | YandexApiError

export type LoginRequestData = {
  code: string
  redirect_uri: string
}
export type LoginResponseData = string | YandexApiError
