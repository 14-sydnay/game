import { Router } from 'express'

import { userThemeRoutes } from './userThemeRoutes'
//import { forumRoutes } from './forumRoutes'

const router: Router = Router()

userThemeRoutes(router)
//forumRoutes(router)

export default router
