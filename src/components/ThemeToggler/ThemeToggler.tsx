import { setLight, setDark } from 'hooks/theme'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/store'

export const ThemeToggler: React.FC<{}> = () => {
  const themeName = useSelector((state: RootState) => state.theme.themeName)
  const dispatch = useDispatch()

  const handleThemeChange = (): void => {
    themeName === 'dark' ? dispatch(setLight()) : dispatch(setDark())
  }
  let themeLabel = 'Светлая'

  useEffect(() => {
    const newTheme = themeName === 'dark' ? 'dracula' : 'light'
    document.documentElement.dataset.theme = newTheme
  }, [themeName])

  useEffect(() => {
    themeLabel = themeName === 'dark' ? 'Темная' : 'Светлая'
  }, [themeName])

  return (
    <label className="label cursor-pointer">
      <span className="label-text">{themeLabel}</span>
      <input type="checkbox" className="toggle" onChange={handleThemeChange} />
    </label>
  )
}
