import { transformToMessage, transformToThread } from './apiTransformer'
import { threadApi } from 'api/forum'
import { apiHasServerError, apiHasClientError } from 'api/utils'
import { Message, Thread, ThreadInfo } from 'src/server/models/thread'

export const getThreads = async (): Promise<ThreadInfo[]> => {
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
  const response = await threadApi.createThread({
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

export const getMessages = async (threadId: number): Promise<Message[]> => {
  const response = (await threadApi.getMessages(threadId)).data
  if (apiHasClientError(response)) {
    alert(response.message)
  }
  if (apiHasServerError(response)) {
    throw new Error(response.message)
  }
  const messages = response.map((dto) => transformToMessage(dto))
  return messages
}

export const addMessage = async (
  threadId: number,
  userId: number,
  text: string,
  authorName: string,
  avatarUrl: string,
  replyMessageId?: number
): Promise<Message> => {
  const response = await threadApi.addMessage({
    threadId,
    text,
    userId,
    authorName,
    avatarUrl,
    replyMessageId,
  })
  if (apiHasClientError(response)) {
    alert(response.message)
  }
  if (apiHasServerError(response)) {
    throw new Error(response.message)
  }
  return transformToMessage(response.data)
}

export const addMessageReaction = async (
  threadId: number,
  messageId: number,
  userId: number
): Promise<Message> => {
  const response = await threadApi.addMessageReaction({
    threadId,
    messageId,
    userId,
  })
  if (apiHasClientError(response)) {
    alert(response.message)
  }
  if (apiHasServerError(response)) {
    throw new Error(response.message)
  }
  return transformToMessage(response.data)
}

export const removeMessageReaction = async (
  threadId: number,
  messageId: number,
  userId: number
): Promise<Message> => {
  const response = await threadApi.removeMessageReaction({
    threadId,
    messageId,
    userId,
  })
  if (apiHasClientError(response)) {
    alert(response.message)
  }
  if (apiHasServerError(response)) {
    throw new Error(response.message)
  }
  return transformToMessage(response.data)
}
