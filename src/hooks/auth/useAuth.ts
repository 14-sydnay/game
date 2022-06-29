import { useDispatch, useSelector } from 'react-redux'

import { addUser, removeUser, startLoading, stopLoading } from './authSlice'
import { AuthType } from './types'
import { authService } from 'services/auth'
import { RootState } from 'src/store'

export const useAuth = (): AuthType => {
  const auth = useSelector((state: RootState) => state.auth)
  const dispatch = useDispatch()

  const signin = (login: string, password: string) => {
    dispatch(startLoading())
    return authService
      .signin(login, password)
      .then((userData) => {
        dispatch(addUser(userData))
        return userData
      })
      .finally(() => dispatch(stopLoading()))
  }

  const logout = () => {
    return authService.logout().then(() => {
      dispatch(removeUser())
      return
    })
  }

  return { user: auth.user, isLoading: auth.isLoading, signin, logout }
}
