import { Request, Response, NextFunction } from 'express'

import { UserThemeModel } from '../db/init'
import { UserThemeDto } from 'api/userTheme'

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
export const saveUserTheme = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const body = req.body as UserThemeDto
  const userTheme = await UserThemeModel.findOne({
    where: { userId: body.userId },
  })
  if (userTheme) {
    await UserThemeModel.update(body, { where: { userId: body.userId } })
  } else {
    await UserThemeModel.create(body)
  }

  res.status(200).json({ themeName: body.themeName, userId: req.params.id })
}
