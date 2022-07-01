import { configureStore } from '@reduxjs/toolkit'

import authReduser from './hooks/auth/authSlice'

export const store = configureStore({
  reducer: {
    auth: authReduser,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
