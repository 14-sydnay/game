import { useContext } from 'react'

import { authContext } from './authContext'
import { AuthContext } from './types'
export const useAuth = (): AuthContext => {
  return useContext(authContext)
}
