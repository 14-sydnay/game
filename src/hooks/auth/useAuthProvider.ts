import { useState, useEffect } from 'react'

import { AuthContextType } from './types'
import { authService } from 'Services/auth'

export const useAuthProvider = (): AuthContextType => {
  const [user, setUser] = useState<Nullable<User>>(null)
  const isAuthenticated = user !== null

  useEffect(() => {
    authService.getCurrentUser().then((user) => {
      setUser(user)
    })
  }, [])

  const signin = (login: string, password: string) => {
    return authService.signin(login, password).then((response) => {
      if (response) {
        setUser(response)
      }
      return user
    })
  }

  return {
    user,
    isAuthenticated: isAuthenticated,
    signin,
  }
}
