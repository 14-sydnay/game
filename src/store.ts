import { configureStore } from '@reduxjs/toolkit'

import authReduser, { AuthState } from './hooks/auth/authSlice'

export const store = configureStore({
  reducer: {
    auth: authReduser,
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
