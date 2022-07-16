import { createSlice } from '@reduxjs/toolkit'

export interface ThemeState {
  themeName: 'light' | 'dark'
}

const initialState: ThemeState = {
  themeName: 'light',
}

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
})

export const { setDark, setLight } = themeSlice.actions

export default themeSlice.reducer
