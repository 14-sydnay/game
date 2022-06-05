import React, { useState } from 'react'

import { authService } from 'Services/auth'

const LoginPage: React.FC = () => {
  const [login, setLogin] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    authService.login(login, password)
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
      {/* <form onSubmit={handleSubmit} className="card-body">
        <label>
          Логин:
          <input
            type="text"
            value={login}
            onChange={handleInputChange}
            name="login"
          ></input>
        </label>
        <label>
          Пароль:
          <input
            type="password"
            value={password}
            onChange={handleInputChange}
            name="password"
          ></input>
        </label>
        <button type="submit" className="btn btn-primary">
          Войти
        </button>
      </form> */}

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
export default LoginPage
