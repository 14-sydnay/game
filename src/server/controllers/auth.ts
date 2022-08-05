import { Request, Response, NextFunction } from 'express'

function addDays(date: Date, days: number): Date {
  const result = new Date(date)
  result.setDate(result.getDate() + days)
  return result
}
export const signin = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  res.cookie(
    'gameAuth',
    {},
    { secure: true, httpOnly: true, expires: addDays(new Date(), 30) }
  )
  next()
}

export const signout = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  res.clearCookie('gameAuth')
  next()
}
