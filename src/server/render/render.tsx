import { Request, Response } from 'express'
import fs from 'fs'
import path from 'path'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router-dom/server'

import { App } from '../../client/ssr'
import { AuthState } from '../../hooks/auth/authSlice'
import { createStore } from 'src/store'
//import { addUser, removeUser, startLoading, stopLoading } from './authSlice'

export const render = (req: Request, res: Response): void => {
  const indexHTML = fs.readFileSync(
    path.resolve(__dirname, '../src/index.html'),
    { encoding: 'utf8' }
  )
  const iniitAuthState: AuthState = {
    user: {
      id: 1,
      firstName: 'Иван',
      secondName: 'Иванов',
      displayName: 'string',
      login: 'string',
      email: 'string',
      phone: 'string',
      avatar: 'string',
    },
    isLoading: false,
  }
  const store = createStore({ auth: iniitAuthState })

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
