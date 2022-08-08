import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { threadService } from 'services/forum'
import { Message } from 'src/server/models/thread'

export interface MessagesState {
  messages: Message[]
}

const initialState: MessagesState = { messages: [] }

export const selectAllMessages = (state: {
  messages: MessagesState
}): Message[] => state.messages.messages

const findMessageById = (
  messages: Message[],
  messageId: number
): Nullable<Message> => messages.find((m) => m.id == messageId) ?? null

export const selectMessageById = (
  state: {
    messages: MessagesState
  },
  messageId: number
): Nullable<Message> => findMessageById(state.messages.messages, messageId)

export const selectMessageReactionByUser = (
  state: {
    messages: MessagesState
  },
  messageId: number,
  userId: number
): boolean => {
  const message = findMessageById(state.messages.messages, messageId)
  if (message) {
    return message.reactions.findIndex((r) => r.userId === userId) > -1
  } else {
    return false
  }
}

export const fetchMessages = createAsyncThunk(
  'messages/fetchMessages',
  async (threadId: number) => {
    const response = await threadService.getMessages(threadId)
    return response
  }
)

export const addThreadMessage = createAsyncThunk(
  'messages/addMessage',
  async (payload: {
    threadId: number
    userId: number
    authorName: string
    avatarUrl: string
    text: string
    replyMessageId?: number
  }) => {
    const { threadId, replyMessageId, text, userId, authorName, avatarUrl } = {
      ...payload,
    }
    const response = await threadService.addMessage(
      threadId,
      userId,
      text,
      authorName,
      avatarUrl,
      replyMessageId
    )
    return response
  }
)

export const addMessageReaction = createAsyncThunk(
  'messages/addMessageReaction',
  async (payload: { threadId: number; messageId: number; userId: number }) => {
    const { threadId, messageId, userId } = {
      ...payload,
    }
    const response = await threadService.addMessageReaction(
      threadId,
      messageId,
      userId
    )
    return response
  }
)

export const removeMessageReaction = createAsyncThunk(
  'messages/removeMessageReaction',
  async (payload: { threadId: number; messageId: number; userId: number }) => {
    const { threadId, messageId, userId } = {
      ...payload,
    }
    const response = await threadService.removeMessageReaction(
      threadId,
      messageId,
      userId
    )
    return response
  }
)

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchMessages.fulfilled, (state, action) => {
        state.messages = action.payload
      })
      .addCase(addThreadMessage.fulfilled, (state, action) => {
        state.messages.push(action.payload)
      })
      .addCase(addMessageReaction.fulfilled, (state, action) => {
        const message = findMessageById(state.messages, action.payload.id)
        if (message) message.reactions = action.payload.reactions
      })
      .addCase(removeMessageReaction.fulfilled, (state, action) => {
        const message = findMessageById(state.messages, action.payload.id)
        if (message) message.reactions = action.payload.reactions
      })
  },
})

export default messagesSlice.reducer
