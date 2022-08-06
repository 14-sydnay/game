import { Router } from 'express'

import {
  getThreads,
  getThread,
  createThread,
  createThreadMessage,
  getThreadMesssages,
} from '../controllers/threads'
import { authMiddleware } from '../middlewares'

export const threadRoutes = (router: Router): void => {
  const threadRouter: Router = Router()

  //threadRouter.route('/:id').get(getThread)
  threadRouter
    .route('/:id/messages')
    .get([authMiddleware], getThreadMesssages)
    .post([authMiddleware], createThreadMessage)
  threadRouter
    .route('/')
    .get([authMiddleware], getThreads)
    .post([authMiddleware], createThread)

  router.use('/api/v1/threads', threadRouter)
}
