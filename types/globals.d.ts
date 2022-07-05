import '@testing-library/jest-dom/extend-expect'
import { AuthState } from 'hooks/auth/authSlice'

declare global {
  export type Values<T extends Record<string, unknown>> = T[Keys<T>]

  export interface Window {
    __INITIAL_STATE__: {
      auth: AuthState
    }
  }
}
