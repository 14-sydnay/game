import { Request, Response, NextFunction } from 'express'

import { isServer } from '../../client/utils'
import { AuthCookie } from '../models'
export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  if (isServer) {
    next()
  } else {
    const cookie = req.cookies.gameAuth as AuthCookie
    if (cookie === undefined) {
      console.log('___________NOT AUTH___________')
      res.status(401).json({ message: 'User not authentificate.' })
    } else {
      next()
    }
  }
}
