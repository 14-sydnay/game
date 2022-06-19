import { useContext } from 'react'

import { AuthContext } from './AuthContext'
import { AuthContextType } from './types'
export const useAuth = (): AuthContextType => {
  return useContext(AuthContext)
}
