import { User } from 'src/models/user'
import { Nullable } from 'types/nullable'

export type AuthType = {
  user: Nullable<User>
  isLoading: boolean
  signin: (login: string, password: string) => Promise<Nullable<User>>
  logout: () => Promise<void>
}
