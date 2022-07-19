import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { ThemeName } from 'models/theme'
import { userThemeService } from 'services/userTheme'

export interface ThemeState {
  themeName: ThemeName
}

const initialState: ThemeState = {
  themeName: 'light',
}

export const fetchUserTheme = createAsyncThunk(
  'users/fetchByIdStatus',
  async (userId: number) => {
    const userTheme = await userThemeService.getUserTheme(userId)
    return userTheme.themeName
  }
)

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setDark: (state) => {
      state.themeName = 'dark'
    },
    setLight: (state) => {
      state.themeName = 'light'
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchUserTheme.fulfilled, (state, action) => {
      // Add user to the state array
      state.themeName = action.payload
    })
  },
})

export const { setDark, setLight } = themeSlice.actions

export default themeSlice.reducer
