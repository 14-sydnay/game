export type ThemeName = 'light' | 'dark'

export type UserTheme = {
  userId: number
  themeName: ThemeName
}

export const getDefaultUserTheme = (userId: number): UserTheme => ({
  userId: userId,
  themeName: 'light',
})
