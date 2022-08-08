import { Request, Response, NextFunction } from 'express'

import { UserTheme } from '../../models/theme'
import { UserThemeModel } from '../db/init'
import { UserThemeDto } from 'api/userTheme'

const getUserThemeFromDb = async (
  userId: number
): Promise<Nullable<UserTheme>> => {
  return (await UserThemeModel.findOne({
    where: { userId: userId },
  })) as unknown as UserTheme
}

export const getUserTheme = async (
  req: Request,
  res: Response,
  _: NextFunction
): Promise<void> => {
  //todo временно тут
  const userId = +req.params.id
  if (userId === 0) {
    res.status(401).json({ message: 'User not authentificate.' })
  } else {
    const userTheme = await getUserThemeFromDb(userId)
    res.status(200).json(userTheme)
  }
}
export const saveUserTheme = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const body = req.body as UserThemeDto
  const userTheme = await getUserThemeFromDb(body.userId)
  if (userTheme) {
    await UserThemeModel.update(body, { where: { userId: body.userId } })
  } else {
    await UserThemeModel.create(body)
  }

  res.status(200).json({ themeName: body.themeName, userId: req.params.id })
}
