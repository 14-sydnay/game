import '@testing-library/jest-dom/extend-expect'
import { AuthState } from 'hooks/auth/authSlice'

declare global {
  export type Nullable<T> = T | null
  export type Values<T> = T[keyof T]

  export interface Window {
    __INITIAL_STATE__: {
      auth: AuthState
    }
  }
}
