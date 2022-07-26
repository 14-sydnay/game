import { AxiosResponse } from 'axios'

import createApi from '../api'
import {
  GetThreadResponse,
  GetThreadsResponse,
  NewThreadRequest,
  NewThreadResponse,
  ThreadDto,
} from './types'
import { apiHasClientError } from 'api/utils'

const apiInstance = createApi(`api/v1/threads`)

export const threadApi = {
  getAll: (): Promise<AxiosResponse<GetThreadsResponse, unknown>> =>
    apiInstance.get<GetThreadsResponse>(''),

  get: (threadId: number): Promise<AxiosResponse<GetThreadResponse, unknown>> =>
    apiInstance.get<GetThreadResponse>(`/${threadId}`),

  newThread: (data: NewThreadRequest): Promise<NewThreadResponse> =>
    apiInstance.post<NewThreadRequest, NewThreadResponse>('', data),
}
