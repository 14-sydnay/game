import { Router } from 'express'

import { signin, signout } from '../controllers/auth'

export const authRoutes = (router: Router): void => {
  const authorRouter: Router = Router()

  authorRouter.route('/signin').post(signin)
  authorRouter.route('/signout').post(signout)

  router.use('/api/v1/auth', authorRouter)
}
