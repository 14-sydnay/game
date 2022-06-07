import { useState, useEffect } from 'react'

import { AuthContext } from './types'
import { authService } from 'Services/auth'

export const useProviderAuth = (): AuthContext => {
  const [user, setUser] = useState<Nullable<User>>(null)
  const isAuthtorization = user !== null

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
    isAuthtorization,
    signin,
  }
}
