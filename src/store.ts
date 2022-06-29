import { configureStore } from '@reduxjs/toolkit'

import authReduser from './features/auth/authSlice'
import counterReducer from './features/counter/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReduser,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
