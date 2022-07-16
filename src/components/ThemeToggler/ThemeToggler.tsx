import { setLight, setDark } from 'hooks/theme'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/store'

export const ThemeToggler: React.FC<{}> = () => {
  const theme = useSelector((state: RootState) => state.theme)
  const dispatch = useDispatch()

  const handleThemeChange = (): void => {
    theme.themeName === 'dark' ? dispatch(setLight) : dispatch(setDark)
  }
  let themeLabel = 'Светлая'

  useEffect(() => {
    const newTheme = theme.themeName === 'dark' ? 'dracula' : 'light'
    document.documentElement.dataset.theme = newTheme
  }, [theme])

  useEffect(() => {
    themeLabel = theme.themeName === 'dark' ? 'Темная' : 'Светлая'
  }, [theme])

  return (
    <label className="label cursor-pointer">
      <span className="label-text">{themeLabel}</span>
      <input type="checkbox" className="toggle" onChange={handleThemeChange} />
    </label>
  )
}
