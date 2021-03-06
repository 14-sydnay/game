import React, { FC } from 'react'
import { useSelector } from 'react-redux'

import { useOAuthProvider } from './oauth/useOAuthProvider'
import { useAuthProvider } from './useAuthProvider'
import { RootState } from 'src/store'

export const AuthProvider: FC<{ children: JSX.Element }> = ({ children }) => {
  const auth = useSelector((state: RootState) => state.auth)
  useOAuthProvider()
  useAuthProvider()
  return auth.isLoading ? <>Загрузка...</> : <>{children}</>
}
