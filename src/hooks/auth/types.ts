import { User } from 'src/models/user'
import { Nullable } from 'types/nullable'

export type AuthContextType = {
  isLoading: boolean
  user: Nullable<User>
  isAuthenticated: boolean
  signin: (login: string, password: string) => Promise<Nullable<User>>
  logout: (cb: VoidFunction) => void
}
