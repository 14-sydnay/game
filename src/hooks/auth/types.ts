export type AuthContext = {
  user: Nullable<User>
  isAuthtorization: boolean
  signin: (login: string, password: string) => Promise<Nullable<User>>
}
