import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { authorsService } from './services'
import { Author } from 'src/server/models/author'

const initialState: Author[] = []

export const fetchAuthors = createAsyncThunk(
  'authors/fetchAuthors',
  async () => {
    const response = await authorsService.getAuthors()
    return response
  }
)

const authorsSlice = createSlice({
  name: 'authors',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchAuthors.fulfilled, (state, action) => {
      return action.payload
    })
  },
})

export const getAuthorById = (
  state: { authors: Author[] },
  authorId: number
): Author | undefined => {
  return state.authors.find((author) => author.id === authorId)
}

export default authorsSlice.reducer
