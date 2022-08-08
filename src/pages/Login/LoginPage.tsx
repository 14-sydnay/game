import React, { useState } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'

import { LocationState } from './type'
import { useAuth, useOAuthYandex } from 'hooks/auth'

export const LoginPage: React.FC = () => {
  const auth = useAuth()
  const oauth = useOAuthYandex()

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

  const handleYandexAuth = () => {
    void oauth.redirectToOAuthProvider()
  }

  return (
    <main>
      <form
        onSubmit={handleSubmit}
        className="card mx-auto mt-20 w-full max-w-sm flex-shrink-0 bg-base-100 shadow-2xl"
      >
        <div className="card-body">
          <div className="form-control">
            <label className="label" htmlFor="login">
              <span className="label-text">Логин</span>
            </label>
            <input
              type="text"
              id="login"
              className="input input-bordered"
              value={login}
              onChange={(e) => setLogin(e.currentTarget.value)}
              name="login"
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="password">
              <span className="label-text">Пароль</span>
            </label>
            <input
              type="password"
              id="password"
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
          <div className="form-control mt-6">
            <button
              type="button"
              onClick={handleYandexAuth}
              className="btn btn-primary"
            >
              Войти через Яндекс
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
