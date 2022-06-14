import '@testing-library/jest-dom/extend-expect'

declare global {
  export type Values<T extends Record<string, unknown>> = T[Keys<T>]
}
