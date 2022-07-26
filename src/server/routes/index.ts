import { Router } from 'express'

import { threadRoutes } from './threadRoutes'
import { userThemeRoutes } from './userThemeRoutes'

const router: Router = Router()

userThemeRoutes(router)
threadRoutes(router)

export default router
