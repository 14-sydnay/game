import { Request, Response } from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'

import { App } from '../../client/ssr'

export const render = (req: Request, res: Response): void => {
  const reactHtml = renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  )
  res.send(reactHtml)
}
