import cookieParser from 'cookie-parser'
import express from 'express'
import path from 'path'

import { dbConnect } from './db/init'
import { render } from './render/render'
import router from './routes'

dbConnect()
  .then(() => {
    const app = express()

    app.use(express.static(path.resolve(__dirname, './public')))
    app.use(express.json())
    app.use(cookieParser())
    app.use(router)

    app.use(render)

    const port = process.env.PORT || 3000

    app.listen(port, () => {
      console.log('Application is started on localhost:', port)
    })
  })
  .catch((error) => {
    console.log(error)
  })
