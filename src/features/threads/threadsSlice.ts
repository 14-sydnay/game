import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { threadService } from 'services/forum'
import { ThreadInfo } from 'src/server/models/thread'

export interface ThreadsState {
  threads: ThreadInfo[]
}

const initialState: ThreadsState = { threads: [] }

export const fetchThreads = createAsyncThunk(
  'threads/fetchThreads',
  async () => {
    const response = await threadService.getThreads()
    return response
  }
)

const threadsSlice = createSlice({
  name: 'threads',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchThreads.fulfilled, (state, action) => {
      state.threads = action.payload
    })
  },
})

//export const {} = threadsSlice.actions

export const selectAllThreads = (state) => state.threads.threads

export const selectThreadById = (state, threadId) =>
  state.threads.threads.find((thread) => thread.id === threadId)

export default threadsSlice.reducer
