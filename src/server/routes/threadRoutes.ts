import { Router } from 'express'

import {
  getThreads,
  getThread,
  createThread,
  createThreadMessage,
  getThreadMesssages,
} from '../controllers/threads'

export const threadRoutes = (router: Router): void => {
  const threadRouter: Router = Router()

  //threadRouter.route('/:id').get(getThread)
  threadRouter
    .route('/:id/messages')
    .get(getThreadMesssages)
    .post(createThreadMessage)
  threadRouter.route('/').get(getThreads).post(createThread)

  router.use('/api/v1/threads', threadRouter)
}
//http://localhost:3000/forum/api/v1/threads/2/messages
