import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { threadService } from 'services/forum'
import { Message } from 'src/server/models/thread'

export interface MessagesState {
  messages: Message[]
}

const initialState: MessagesState = { messages: [] }

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
    replyMessageId: number | null
    userId: number
    authorName: string
    avatarUrl: string
    text: string
  }) => {
    const { threadId, replyMessageId, text, userId, authorName, avatarUrl } = { ...payload }
    const response = await threadService.addMessage(
      threadId,
      replyMessageId,
      userId,
      text,
      authorName,
      avatarUrl
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
  },
})

export const selectAllMessages = (state: {
  messages: MessagesState
}): Message[] => state.messages.messages

export const selectMessageById = (
  state: {
    messages: MessagesState
  },
  messageId: number
): Nullable<Message> =>
  state.messages.messages.find((m) => m.id == messageId) ?? null

export default messagesSlice.reducer
