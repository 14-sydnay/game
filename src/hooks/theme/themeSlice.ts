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
  'users/fetchTheme',
  async (userId: number) => {
    const userTheme = await userThemeService.getUserTheme(userId)
    return userTheme.themeName
  }
)

export const saveUserTheme = createAsyncThunk(
  'users/saveTheme',
  async (payload: { userId: number; themeName: ThemeName }) => {
    const { userId, themeName } = { ...payload }
    const userTheme = await userThemeService.saveUserTheme(userId, themeName)
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
    builder
      .addCase(fetchUserTheme.fulfilled, (state, action) => {
        state.themeName = action.payload
      })
      .addCase(saveUserTheme.fulfilled, (state, action) => {
        state.themeName = action.payload
      })
  },
})

export const { setDark, setLight } = themeSlice.actions

export default themeSlice.reducer
