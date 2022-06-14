import { ApiError } from 'api/types'

export function hasError(response: any): response is ApiError {
  return response && response.reason
}
