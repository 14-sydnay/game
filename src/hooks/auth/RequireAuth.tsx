import React, { FC } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

import { useAuth } from './useAuth'

export const RequireAuth: FC<{ children: JSX.Element }> = ({ children }) => {
  const auth = useAuth()
  const location = useLocation()
  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
  }
  return children
}
