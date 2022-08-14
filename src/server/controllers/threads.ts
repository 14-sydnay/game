import { Request, Response, NextFunction } from 'express'
import { Sequelize } from 'sequelize-typescript'

import {
  AddMessageReactionDto,
  NewThreadDto,
  NewThreadMessageDto,
} from '../../api/forum/types'
import {
  AuthorModel,
  MessageModel,
  MessageReactionModel,
  ThreadModel,
} from '../db/init'
import { Author } from '../models/author'
import { Message } from '../models/thread'

const createAuthorIfNotExist = async (
  userId: number,
  name: string,
  avatarUrl: string
): Promise<Author> => {
  let author = await AuthorModel.findOne({ where: { userId: userId } })
  if (!author) {
    author = await AuthorModel.create({
      userId: userId,
      name: name,
      avatarUrl: avatarUrl,
    })
  }

  return { id: author.id as number, userId, name, avatarUrl }
}

const getMessageFromDb = async (messageId: number): Promise<Message> => {
  const message = await MessageModel.findOne({
    where: { id: messageId },
    include: {
      model: MessageReactionModel,
      as: 'reactions',
      attributes: ['id', 'userId', 'createdAt', 'messageId'],
    },
  })
  return message as unknown as Message
}
export const getThreads = async (
  req: Request,
  res: Response,
  _: NextFunction
): Promise<void> => {
  const threads = await ThreadModel.findAll({
    attributes: ['id', 'title', 'createdAt', 'authorId'],
  })
  res.status(200).json(threads)
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

export const getThreadMesssages = async (
  req: Request,
  res: Response,
  _: NextFunction
): Promise<void> => {
  const threadId = +req.params.id
  const messages = await MessageModel.findAll({
    where: { threadId: threadId },
    attributes: [
      'id',
      'threadId',
      'text',
      'createdAt',
      'authorId',
      'replyMessageId',
    ],

    include: {
      model: MessageReactionModel,
      as: 'reactions',
      attributes: ['id', 'userId', 'createdAt', 'messageId'],
    },
  })
  res.status(200).json(messages)
}

export const createThreadMessage = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const body = req.body as NewThreadMessageDto
  const thread = await ThreadModel.findOne({ where: { id: body.threadId } })
  if (!thread) {
    res.status(404).json({ message: 'Thread not found.' })
  } else {
    const author = await createAuthorIfNotExist(
      body.userId,
      body.authorName,
      body.avatarUrl
    )
    const message = await MessageModel.create({
      threadId: body.threadId,
      authorId: author.id,
      text: body.text,
      replyMessageId: body.replyMessageId,
    })
    res.status(200).json(message)
  }
}

export const addMessageReaction = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const body = req.body as AddMessageReactionDto

  let message = await getMessageFromDb(body.messageId)
  if (!message) {
    res.status(404).json({ message: 'Message not found.' })
  } else {
    await MessageReactionModel.create({
      ...body,
    })

    message = await getMessageFromDb(body.messageId)
    res.status(200).json(message)
  }
}

export const removeMessageReaction = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const body = req.body as AddMessageReactionDto

  let message = await getMessageFromDb(body.messageId)
  if (!message) {
    res.status(404).json({ message: 'Message not found.' })
  } else {
    await MessageReactionModel.destroy({
      where: { messageId: body.messageId, userId: body.userId },
    })

    message = await getMessageFromDb(body.messageId)
    res.status(200).json(message)
  }
}
