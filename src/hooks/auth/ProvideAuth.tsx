import React, { FC } from 'react'

import { authContext } from './authContext'
import { AuthProps } from './types'
import { useProviderAuth } from './useProviderAuth'

export const ProvideAuth: FC<AuthProps> = ({ children }) => {
  const auth = useProviderAuth()

  return <authContext.Provider value={auth}>{children}</authContext.Provider>
}
