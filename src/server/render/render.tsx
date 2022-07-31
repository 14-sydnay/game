import { Request, Response } from 'express'
import fs from 'fs'
import path from 'path'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router-dom/server'

import { App } from '../../client/ssr'
import { fetchAuthors } from '../../features/authors/authorsSlice'
import { AuthState } from '../../hooks/auth/authSlice'
import { createStore } from 'src/store'
//import { addUser, removeUser, startLoading, stopLoading } from './authSlice'

export const render = async (req: Request, res: Response): Promise<void> => {
  const indexHTML = fs.readFileSync(
    path.resolve(__dirname, '../src/index.html'),
    { encoding: 'utf8' }
  )
  const initAuthState: AuthState = {
    user: {
      id: 0,
      firstName: 'Неавторизованный пользователь',
      secondName: '',
      displayName: '',
      login: '',
      email: '',
      phone: '',
      avatar: '',
    },
    isLoading: false,
  }
  const store = createStore({ auth: initAuthState })

  await store.dispatch(fetchAuthors()).unwrap()

  const reactHtml = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    </Provider>
  )

  const state = store.getState()
  const result = indexHTML.replace(
    `<div id="root"></div>`,
    `<div id="root">${reactHtml}</div>
    <script>window.__INITIAL_STATE__=${JSON.stringify(state)}</script>
    <script src='main.js'></script>`
  )
  res.send(result)
}
