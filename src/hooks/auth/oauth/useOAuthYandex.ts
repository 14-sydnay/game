import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { startLoading, stopLoading } from '../authSlice'
import { OAuthType } from '../types'
import { authService } from 'services/authYandex'
import { RootState } from 'src/store'
export const useOAuthYandex = (): OAuthType => {
  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get('code')

    if (code) {
      void authService
        .signin(code, `${process.env.REDIRECT_URL}`)
        .then((userData) => {
          window.location.href = `${process.env.REDIRECT_URL}`
          return userData
        })
    }
  }, [])

  const auth = useSelector((state: RootState) => state.auth)
  const dispatch = useDispatch()

  const redirectToOAuthProvider = () => {
    dispatch(startLoading())
    return authService.redirectToYandex().finally(() => dispatch(stopLoading()))
  }

  return {
    user: auth.user,
    isLoading: auth.isLoading,
    redirectToOAuthProvider,
  }
}
