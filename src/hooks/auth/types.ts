export type AuthContextType = {
  user: Nullable<User>
  isAuthenticated: boolean
  signin: (login: string, password: string) => Promise<Nullable<User>>
}
