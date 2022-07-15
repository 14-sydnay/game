import { ServiceIdDto } from 'api/authYandex/types'

export const transformToServiceId = (data: ServiceIdDto): string => {
  return data.service_id
}
