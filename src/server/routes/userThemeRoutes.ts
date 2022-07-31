import { Router } from 'express'

import { getUserTheme, saveUserTheme } from '../controllers/userTheme'
import { authMiddleware } from '../middlewares'

export const userThemeRoutes = (router: Router): void => {
  const userThemeRouter: Router = Router()

  userThemeRouter
    .route('/:id/theme')
    .get([authMiddleware], getUserTheme)
    .post([authMiddleware], saveUserTheme)

  router.use('/api/v1/users', userThemeRouter)
}
