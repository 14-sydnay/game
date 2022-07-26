import { MoonIcon, SunIcon } from '@heroicons/react/solid'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setLight, setDark, fetchUserTheme, saveUserTheme } from 'hooks/theme'
import { RootState } from 'src/store'

export const ThemeToggler: React.FC<{}> = () => {
  const dispatch = useDispatch()

  const themeName = useSelector((state: RootState) => state.theme.themeName)
  const user = useSelector((state: RootState) => state.auth.user)

  const handleSunClick = () => {
    if (user && user.id === 0) {
      dispatch(setDark())
    } else {
      dispatch(saveUserTheme({ userId: user!.id, themeName: 'dark' }))
    }
  }
  const handleMoonClick = () => {
    if (user && user.id === 0) {
      dispatch(setLight())
    } else {
      dispatch(saveUserTheme({ userId: user!.id, themeName: 'light' }))
    }
  }

  useEffect(() => {
    if (user) {
      dispatch(fetchUserTheme(user.id))
    }
  }, [user, dispatch])

  useEffect(() => {
    const newTheme = themeName === 'dark' ? 'dracula' : 'light'
    document.documentElement.dataset.theme = newTheme
  }, [themeName])

  return (
    <>
      {themeName === 'light' ? (
        <SunIcon
          className="m-2 h-8 w-8 cursor-pointer text-yellow-400"
          onClick={handleSunClick}
        />
      ) : (
        <MoonIcon
          className="m-2 h-8 w-8 cursor-pointer"
          onClick={handleMoonClick}
        />
      )}
    </>
  )
}
