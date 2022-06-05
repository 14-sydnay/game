import '@testing-library/jest-dom/extend-expect'

declare global {
  export type Nullable<T> = T | null
  export type Values<T extends Record<string, unknown>> = T[Keys<T>]

  export type User = {
    id: number
    firstName: string
    secondName: string
    displayName: string
    login: string
    email: string
    phone: string
    avatar: string
  }
}
