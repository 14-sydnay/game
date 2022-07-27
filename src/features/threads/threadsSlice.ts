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
      //@ts-ignore
      state.threads = action.payload
    })
  },
})

//export const {} = threadsSlice.actions
//@ts-ignore
export const selectAllThreads = (state) => state.threads.threads
//@ts-ignore
export const selectThreadById = (state, threadId) =>
  //@ts-ignore
  state.threads.threads.find((thread) => thread.id === threadId)

export default threadsSlice.reducer
