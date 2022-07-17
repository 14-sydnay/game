import { setLight, setDark } from 'hooks/theme'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/store'
import { MoonIcon, SunIcon } from '@heroicons/react/solid'

export const ThemeToggler: React.FC<{}> = () => {
  const dispatch = useDispatch()

  const themeName = useSelector((state: RootState) => state.theme.themeName)

  useEffect(() => {
    const newTheme = themeName === 'dark' ? 'dracula' : 'light'
    document.documentElement.dataset.theme = newTheme
  }, [themeName])

  return (
    <>
      {themeName === 'light' ? (
        <SunIcon
          className="m-2 h-8 w-8 cursor-pointer text-yellow-400"
          onClick={() => dispatch(setDark())}
        />
      ) : (
        <MoonIcon
          className="m-2 h-8 w-8 cursor-pointer"
          onClick={() => dispatch(setLight())}
        />
      )}
    </>
  )
}
