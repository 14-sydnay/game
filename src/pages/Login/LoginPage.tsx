import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import { useAuth } from 'hooks/auth'
import { LocationState } from './type'

export const LoginPage: React.FC = () => {
  const auth = useAuth()

  const [login, setLogin] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const navigate = useNavigate()
  const location = useLocation()
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  const from = ((location.state as LocationState)?.from?.pathname ||
    '/') as string

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    void auth.signin(login, password).then(() => {
      navigate(from, { replace: true })
      return
    })
  }

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.currentTarget
    const name = target.name
    switch (name) {
      case 'login':
        setLogin(target.value)
        break
      case 'password':
        setPassword(target.value)
        break
    }
  }
  return (
    <main>
      <form
        onSubmit={handleSubmit}
        className="card mx-auto mt-20 w-full max-w-sm flex-shrink-0 bg-base-100 shadow-2xl"
      >
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Логин</span>
            </label>
            <input
              type="text"
              className="input input-bordered"
              value={login}
              onChange={handleInputChange}
              name="login"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Пароль</span>
            </label>
            <input
              type="password"
              className="input input-bordered"
              value={password}
              onChange={handleInputChange}
              name="password"
            />
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Войти
            </button>
          </div>
        </div>
      </form>
    </main>
  )
}
