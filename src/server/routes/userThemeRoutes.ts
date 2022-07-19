import { Router } from 'express'

import { getUserTheme, saveUserTheme } from '../controllers/userTheme'

export const userThemeRoutes = (router: Router): void => {
  const userThemeRouter: Router = Router()

  userThemeRouter.route('/:id/theme').get(getUserTheme).post(saveUserTheme)

  router.use('/api/v1/users', userThemeRouter)
}
