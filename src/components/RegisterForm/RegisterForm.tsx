import React, { FC, useState } from 'react'

import { Props } from './type'
import { authService } from 'services/auth'

export const RegisterForm: FC<Props> = () => {
  const [login, setLogin] = useState<string>('')
  const [firstName, setFirstName] = useState<string>('')
  const [secondName, setSecondName] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [passwordConfirm, setPasswordConfirm] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [phone, setPhone] = useState<string>('')

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    await authService.register({
      login,
      firstName,
      secondName,
      email,
      phone,
      password,
    })
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="card mx-auto  w-full max-w-sm flex-shrink-0 bg-base-100 shadow-2xl"
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
              onChange={(event) => setLogin(event.currentTarget.value)}
              name="login"
            ></input>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Имя</span>
            </label>
            <input
              type="text"
              className="input input-bordered"
              value={firstName}
              onChange={(event) => setFirstName(event.currentTarget.value)}
              name="firstName"
            ></input>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Фамилия</span>
            </label>
            <input
              type="text"
              className="input input-bordered"
              value={secondName}
              onChange={(event) => setSecondName(event.currentTarget.value)}
              name="secondName"
            ></input>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Почта</span>
            </label>
            <input
              type="email"
              className="input input-bordered"
              value={email}
              onChange={(event) => setEmail(event.currentTarget.value)}
              name="email"
            ></input>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Телефон</span>
            </label>
            <input
              type="tel"
              className="input input-bordered"
              value={phone}
              onChange={(event) => setPhone(event.currentTarget.value)}
              name="phone"
            ></input>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Пароль</span>
            </label>
            <input
              type="password"
              className="input input-bordered"
              value={password}
              onChange={(event) => setPassword(event.currentTarget.value)}
              name="password"
            ></input>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Пароль (еще раз)</span>
            </label>
            <input
              type="password"
              className="input input-bordered"
              value={passwordConfirm}
              onChange={(event) =>
                setPasswordConfirm(event.currentTarget.value)
              }
              name="password"
            ></input>
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Зарегистрироваться
            </button>
          </div>
        </div>
      </form>
    </>
  )
}
