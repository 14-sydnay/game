import React from 'react'
import { createRoot } from 'react-dom/client'
import './assets/style/index.css'
import { Provider } from 'react-redux'

import { App } from './app'
import { store } from './store'
import { swInstance } from './service-worker/swInstance'

const container = document.getElementById('root')
const root = createRoot(container!) // eslint-disable-line

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)

swInstance()
