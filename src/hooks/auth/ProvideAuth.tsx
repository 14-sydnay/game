import React, { FC } from 'react'

import { useProviderAuth } from './useProviderAuth'
import { authContext } from './authContext'

export const ProvideAuth: FC = ({ children }) => {
  const auth = useProviderAuth()

  return <authContext.Provider value={auth}>{children}</authContext.Provider>
}
