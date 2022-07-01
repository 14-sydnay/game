import express from 'express'

import { render } from './render/render'

const app = express()

app.use(render)

app.listen(8080, () => {
  console.log('Server is started')
})
