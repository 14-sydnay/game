import { Router } from 'express'

import { authorsRoutes } from './authorsRoutes'
import { threadRoutes } from './threadRoutes'
import { userThemeRoutes } from './userThemeRoutes'

const router: Router = Router()

userThemeRoutes(router)
threadRoutes(router)
authorsRoutes(router)

export default router
