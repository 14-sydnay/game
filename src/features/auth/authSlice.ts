import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { User } from 'models/user'
import { Nullable } from 'types/nullable'

export interface AuthState {
  isLoading: boolean
  user: Nullable<User>
}

const initialState: AuthState = {
  isLoading: false,
  user: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signin: (state, action: PayloadAction<Nullable<User>>) => {
      state.user = action.payload
    },
    logout: (state) => {
      state.user = null
    },
    // todo: убрать в другой slice
    startLoading: (state) => {
      state.isLoading = true
    },
    stopLoading: (state) => {
      state.isLoading = false
    },
  },
})

export const { signin, logout } = authSlice.actions

export default authSlice.reducer
