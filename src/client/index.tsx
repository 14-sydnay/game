/// <reference types="../../types/globals" />
/// <reference types="../../types/image" />
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import 'assets/style/index.css'

import { AuthProvider } from 'hooks/auth'
import { App } from 'src/app'
//import { swInstance } from 'src/service-worker/swInstance'
import { createStore } from 'src/store'

const state = window.__INITIAL_STATE__
const store = createStore(state)
delete window.__INITIAL_STATE__

const container = document.getElementById('root')

ReactDOM.hydrateRoot(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  container!,
  <Provider store={store}>
    <AuthProvider>
      <Router>
        <App />
      </Router>
    </AuthProvider>
  </Provider>
)
//swInstance()
