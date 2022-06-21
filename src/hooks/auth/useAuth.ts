import { useContext } from 'react'

import { AuthContext } from './authContext'
import { AuthContextType } from './types'
export const useAuth = (): AuthContextType => {
  return useContext(AuthContext)
}
