import { Router } from 'express'

import { authorsRoutes } from './authorsRoutes'
import { authRoutes } from './authRoutes'
import { threadRoutes } from './threadRoutes'
import { userThemeRoutes } from './userThemeRoutes'

const router: Router = Router()

userThemeRoutes(router)
threadRoutes(router)
authorsRoutes(router)
authRoutes(router)

export default router
