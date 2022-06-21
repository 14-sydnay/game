export type AuthContextType = {
  isLoading: boolean
  user: Nullable<User>
  isAuthenticated: boolean
  signin: (login: string, password: string) => Promise<Nullable<User>>
}
