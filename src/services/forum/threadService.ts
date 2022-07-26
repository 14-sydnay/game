import { transformToThread } from './apiTransformer'
import { threadApi } from 'api/forum'
import { apiHasServerError, apiHasClientError } from 'api/utils'
import { Thread, ThreadInfo } from 'src/server/models/thread'

export const getThreads = async (): Promise<Thread[]> => {
  const response = (await threadApi.getAll()).data
  if (apiHasClientError(response)) {
    alert(response.message)
    return []
  }
  if (apiHasServerError(response)) {
    throw new Error(response.message)
  }

  //todo add validation theme name
  return response.map((threadDto) => transformToThread(threadDto))
}

export const getThread = async (threadId: number): Promise<Thread> => {
  const response = (await threadApi.get(threadId)).data
  if (apiHasClientError(response)) {
    alert(response.message)
  }
  if (apiHasServerError(response)) {
    throw new Error(response.message)
  }

  //todo add validation theme name
  return transformToThread(response)
}

export const createThread = async (
  userId: number,
  authorName: string,
  avatarUrl: string,
  title: string
): Promise<ThreadInfo> => {
  const response = await threadApi.newThread({
    title,
    userId,
    authorName,
    avatarUrl,
  })
  if (apiHasClientError(response)) {
    alert(response.message)
  }
  if (apiHasServerError(response)) {
    throw new Error(response.message)
  }

  //todo add validation theme name
  const threadInfo = transformToThread(response.data)
  return threadInfo
}
