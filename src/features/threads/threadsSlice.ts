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

export const selectAllThreads = (state: {
  threads: ThreadsState
}): ThreadInfo[] => state.threads.threads

export const selectThreadById = (
  state: { threads: ThreadsState },
  threadId: number
): Nullable<ThreadInfo> =>
  state.threads.threads.find((thread) => thread.id === threadId) || null

export default threadsSlice.reducer
