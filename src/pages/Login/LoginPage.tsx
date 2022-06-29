import React, { useState } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'

import { LocationState } from './type'
import { useAuth } from 'hooks/auth'

export const LoginPage: React.FC = () => {
  const auth = useAuth()

  const [login, setLogin] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const navigate = useNavigate()
  const location = useLocation()

  const from = (location.state as LocationState)?.from?.pathname || '/'

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    void auth.signin(login, password).then(() => {
      navigate(from, { replace: true })
      return
    })
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
              onChange={(e) => setLogin(e.currentTarget.value)}
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
              onChange={(e) => setPassword(e.currentTarget.value)}
              name="password"
            />
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Войти
            </button>
          </div>
          <Link to="/registration">
            <button type="button" className="btn btn-link w-full">
              Регистрация
            </button>
          </Link>
        </div>
      </form>
    </main>
  )
}
