import { configureStore } from '@reduxjs/toolkit'

import authorsReducer from './features/authors/authorsSlice'
import messagesReducer from './features/messages/messagesSlice'
import threadsReducer from './features/threads/threadsSlice'
import authReducer, { AuthState } from './hooks/auth/authSlice'
import themeReducer from './hooks/theme/themeSlice'

declare module 'react-redux' {
  export function useDispatch(): AppDispatch
}

export const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
    threads: threadsReducer,
    authors: authorsReducer,
    messages: messagesReducer,
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
      auth: authReducer,
      theme: themeReducer,
      threads: threadsReducer,
      authors: authorsReducer,
      messages: messagesReducer,
    },
  })
}
