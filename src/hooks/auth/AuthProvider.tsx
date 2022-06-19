import React, { FC } from 'react'

import { AuthContext } from './AuthContext'
import { useAuthProvider } from './useAuthProvider'

export const AuthProvider: FC<{ children: JSX.Element }> = ({ children }) => {
  const auth = useAuthProvider()

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}
