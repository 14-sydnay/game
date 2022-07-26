import { Router } from 'express'

import { getThreads, getThread, createThread } from '../controllers/threads'

export const threadRoutes = (router: Router): void => {
  const threadRouter: Router = Router()

  threadRouter.route('/').get(getThreads).post(createThread)
  threadRouter.route('/:id').get(getThread)

  router.use('/api/v1/threads', threadRouter)
}
