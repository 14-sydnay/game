import { Router } from 'express'

import { getAll } from '../controllers/authors'

export const authorsRoutes = (router: Router): void => {
  const authorRouter: Router = Router()

  authorRouter.route('/').get(getAll)

  router.use('/api/v1/authors', authorRouter)
}
