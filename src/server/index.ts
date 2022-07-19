import express from 'express'
import path from 'path'

import { render } from './render/render'
import router from './routes'

const app = express()

app.use(express.static(path.resolve(__dirname, './public')))
app.use(router)
app.use(render)

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log('Application is started on localhost:', port)
})
