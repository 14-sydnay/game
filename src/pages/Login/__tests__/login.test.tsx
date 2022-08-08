import React from 'react'
import { LoginPage } from '../LoginPage'
import { act, render } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import authReducer from 'hooks/auth/authSlice'
import { BrowserRouter as Router } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'

//@ts-ignore
const ReduxProvider = ({ children, reduxStore }) => (
  <Provider store={reduxStore}>{children}</Provider>
)

test('loads and displays login form', async () => {
  const store = configureStore({
    reducer: {
      auth: authReducer,
    },
  })

  render(
    <ReduxProvider reduxStore={store}>
      <Router>
        <LoginPage />
      </Router>
    </ReduxProvider>
  )

  expect(document.body).toHaveTextContent('Войти')
})

test('return values from login form', async () => {
  const store = configureStore({
    reducer: {
      auth: authReducer,
    },
  })

  const { getByLabelText, getByText } = render(
    <ReduxProvider reduxStore={store}>
      <Router>
        <LoginPage />
      </Router>
    </ReduxProvider>
  )

  const loginInput = getByLabelText('Логин') as HTMLInputElement
  const passwordInput = getByLabelText('Пароль') as HTMLInputElement

  await act(async () => {
    loginInput.value = 'test'
  })

  await act(async () => {
    passwordInput.value = 'test'
  })

  expect(loginInput.value).toEqual('test')

  expect(passwordInput.value).toEqual('test')
}, 10000)
