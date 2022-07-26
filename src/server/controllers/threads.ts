import { Request, Response, NextFunction } from 'express'
import { Sequelize } from 'sequelize-typescript'

import { NewThreadDto, ThreadDto } from '../../api/forum/types'
import { AuthorModel, MessageModel, ThreadModel } from '../db/init'

export const getThreads = async (
  req: Request,
  res: Response,
  _: NextFunction
): Promise<void> => {
  const threads = await ThreadModel.findAll({
    attributes: ['id', 'title', 'createdAt'],
    include: [
      {
        model: AuthorModel,
        attributes: [['name', 'authorName'], 'avatarUrl'],
      },
    ],
  })
  res.status(200).json(threads)
  /*   const threads = await ThreadModel.findAll({
    attributes: {
      include: [
        {
          model: 'MessageModel',

          attributes: 
            include: [
              [Sequelize.fn('COUNT', Sequelize.col('id')), 'messageCount'],
            ],
          },
        },
      ],
    },
  })
  res.status(200).json(threads) */
}

export const getThread = async (
  req: Request,
  res: Response,
  _: NextFunction
): Promise<void> => {
  const threadId = +req.params.id
  const thread = await ThreadModel.findOne({ where: { id: threadId } })
  if (!thread) {
    res.status(404).json({ message: 'Thread not found.' })
  } else {
    const messages = await MessageModel.findOne({
      where: { threadId: threadId },
    })
    res.status(200).json({ ...thread, messages })
  }
}

export const createThread = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const body = req.body as NewThreadDto
  let author = await AuthorModel.findOne({ where: { userId: body.userId } })
  if (!author) {
    author = await AuthorModel.create({
      userId: body.userId,
      name: body.authorName,
      avatarUrl: body.avatarUrl,
    })
  }
  const thread = await ThreadModel.create({
    title: body.title,
    authorId: author.id as number,
  })

  res.status(200).json(thread)
}
