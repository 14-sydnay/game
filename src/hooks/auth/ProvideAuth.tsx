import React, { FC } from 'react'

import { authContext } from './authContext'
import { useProviderAuth } from './useProviderAuth'

export const ProvideAuth: FC<Props> = ({ children }) => {
  const auth = useProviderAuth()

  return <authContext.Provider value={auth}>{children}</authContext.Provider>
}
