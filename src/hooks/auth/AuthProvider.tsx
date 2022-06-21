import React, { FC } from 'react'

import { AuthContext } from './authContext'
import { useAuthProvider } from './useAuthProvider'

export const AuthProvider: FC<{ children: JSX.Element }> = ({ children }) => {
  const auth = useAuthProvider()

  return auth.isLoading ? (
    <>Загрузка...</>
  ) : (
    <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
  )
}
