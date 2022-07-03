import { Request, Response } from 'express'
import fs from 'fs'
import path from 'path'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router-dom/server'

import { App } from '../../client/ssr'
import { createStore } from 'src/store'

export const render = (req: Request, res: Response): void => {
  const indexHTML = fs.readFileSync(
    path.resolve(__dirname, '../src/index.html'),
    { encoding: 'utf8' }
  )
  const store = createStore()

  const reactHtml = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    </Provider>
  )
  const result = indexHTML.replace(
    `<div id="root"></div>`,
    `<div id="root">${reactHtml}</div>
    <script src='main.js'></script>`
  )
  res.send(result)
}
