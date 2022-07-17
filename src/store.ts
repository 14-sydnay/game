import { configureStore } from '@reduxjs/toolkit'

import authReducer, { AuthState } from './hooks/auth/authSlice'
import themeReducer from './hooks/theme/themeSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const createStore = (initialState?: {
  auth: AuthState
}): typeof store => {
  return configureStore({
    preloadedState: initialState,
    reducer: {
      auth: authReduser,
    },
  })
}
