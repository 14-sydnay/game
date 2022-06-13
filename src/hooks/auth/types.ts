import { User } from 'src/models/user'
import { Nullable } from 'types/nullable'

export type AuthContext = {
  user: Nullable<User>
  isAuthtorization: boolean
  signin: (login: string, password: string) => Promise<Nullable<User>>
}
export type AuthProps = {
  children?: React.ReactNode
}
