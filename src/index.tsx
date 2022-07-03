import React from 'react'
import { createRoot } from 'react-dom/client'
import './assets/style/index.css'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import { App } from './app'
import { swInstance } from './service-worker/swInstance'
import { store } from './store'

const container = document.getElementById('root')
const root = createRoot(container!) // eslint-disable-line

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
)

swInstance()
