import { UserThemeDto } from 'api/userTheme'
import { ThemeName, UserTheme } from 'models/theme'

export const transformToUserTheme = (data: UserThemeDto): UserTheme => {
  return {
    userId: data.userId,
    themeName: data.themeName as ThemeName,
  }
}
