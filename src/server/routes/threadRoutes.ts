import { Router } from 'express'

import {
  getThreads,
  getThread,
  createThread,
  createThreadMessage,
  getThreadMesssages,
  addMessageReaction,
  removeMessageReaction,
} from '../controllers/threads'
import { authMiddleware } from '../middlewares'

export const threadRoutes = (router: Router): void => {
  const threadRouter: Router = Router()

  //threadRouter.route('/:id').get(getThread)

  threadRouter
    .route('/')
    .get([authMiddleware], getThreads)
    .post([authMiddleware], createThread)

  threadRouter
    .route('/:id/messages')
    .get([authMiddleware], getThreadMesssages)
    .post([authMiddleware], createThreadMessage)

  threadRouter
    .route('/:id/messages/:messageId/add')
    .post([authMiddleware], addMessageReaction)

  threadRouter
    .route('/:id/messages/:messageId/remove')
    .post([authMiddleware], removeMessageReaction)

  router.use('/api/v1/threads', threadRouter)
}
