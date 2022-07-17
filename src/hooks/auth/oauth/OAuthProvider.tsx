import React, { FC } from 'react'
import { useSelector } from 'react-redux'

import { useOAuthProvider } from './useOAuthProvider'
import { RootState } from 'src/store'

export const OAuthProvider: FC<{ children: JSX.Element }> = ({ children }) => {
  const auth = useSelector((state: RootState) => state.auth)
  useOAuthProvider()
  return auth.isLoading ? <>Загрузка...</> : <>{children}</>
}
