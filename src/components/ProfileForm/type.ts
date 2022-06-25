export type Profile = {
  id: number
  firstName: string
  secondName: string
  displayName: string
  login: string
  email: string
  phone: string
  avatar: string
}

export type OwnProps = {
  user: Profile
}
export type Props = OwnProps & { children: JSX.Element }
