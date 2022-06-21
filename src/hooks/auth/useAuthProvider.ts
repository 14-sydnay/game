import { useState, useEffect } from 'react'

import { AuthContextType } from './types'
import { authService } from 'Services/auth'

export const useAuthProvider = (): AuthContextType => {
  const [user, setUser] = useState<Nullable<User>>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => setUser(userData))
      .catch(() => setUser(null))
      .finally(() => setIsLoading(false))
  }, [])

  const signin = (login: string, password: string) => {
    setIsLoading(true)
    return authService
      .signin(login, password)
      .then((userData) => setUser(userData))
      .finally(() => setIsLoading(false))
  }

  return {
    isLoading,
    user,
    get isAuthenticated() {
      return this.user !== null
    },
    signin,
  }
}
