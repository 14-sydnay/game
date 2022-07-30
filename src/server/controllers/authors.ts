import { Request, Response, NextFunction } from 'express'

import { AuthorModel } from '../db/init'

export const getAll = async (
  req: Request,
  res: Response,
  _: NextFunction
): Promise<void> => {
  const authors = await AuthorModel.findAll()
  res.status(200).json(authors)
}
