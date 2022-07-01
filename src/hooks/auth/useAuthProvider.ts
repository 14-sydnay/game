import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { addUser, removeUser, startLoading, stopLoading } from './authSlice'
import { authService } from 'services/auth'

export const useAuthProvider = (): void => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(startLoading())
    const _ = authService
      .getCurrentUser()
      .then((userData) => dispatch(addUser(userData)))
      .catch(() => dispatch(removeUser()))
      .finally(() => dispatch(stopLoading()))
  }, [])

  return
}
