import { AxiosResponse } from 'axios'

import createApi from '../api'
import {
  GetThreadResponse,
  GetThreadsResponse,
  NewThreadMessageRequest,
  NewThreadMessageResponse,
  NewThreadRequest,
  NewThreadResponse,
  GerThreadMessagesResponse as GetThreadMessagesResponse,
} from './types'
import { getUrl } from 'src/client/utils'

const apiInstance = createApi(getUrl(`/api/v1/threads`))

export const threadApi = {
  getAll: (): Promise<AxiosResponse<GetThreadsResponse, unknown>> =>
    apiInstance.get<GetThreadsResponse>(''),

  get: (threadId: number): Promise<AxiosResponse<GetThreadResponse, unknown>> =>
    apiInstance.get<GetThreadResponse>(`/${threadId}`),

  createThread: (data: NewThreadRequest): Promise<NewThreadResponse> =>
    apiInstance.post<NewThreadRequest, NewThreadResponse>('', data),

  getMessages: (
    threadId: number
  ): Promise<AxiosResponse<GetThreadMessagesResponse>> =>
    apiInstance.get<GetThreadMessagesResponse>(`/${threadId}/messages`),

  addMessage: (
    data: NewThreadMessageRequest
  ): Promise<NewThreadMessageResponse> =>
    apiInstance.post<NewThreadMessageRequest, NewThreadMessageResponse>(
      `/${data.threadId}/messages`,
      data
    ),
}
