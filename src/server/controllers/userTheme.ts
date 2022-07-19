import { UserThemeDto } from 'api/userTheme'
import { Request, Response, NextFunction } from 'express'
export const getUserTheme = (
  req: Request,
  res: Response,
  _: NextFunction
): void => {
  //todo временно тут
  if (+req.params.id === 0) {
    res.status(401).json({ message: 'User not authentificate.' })
  } else {
    res.status(200).json({ themeName: 'dark', userId: req.params.id })
  }
}
export const saveUserTheme = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const body = req.body as UserThemeDto

  res.status(200).json({ themeName: body.themeName, userId: req.params.id })
}
