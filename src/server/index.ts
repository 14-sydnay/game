import cookieParser from 'cookie-parser'
// eslint-disable-next-line import/order
import path from 'path'
import * as dotenv from 'dotenv'
dotenv.config({ path: path.resolve(__dirname, '../.env.dev') })
import express from 'express'

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
