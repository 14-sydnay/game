import React, { FC, useState, useCallback } from 'react'

import { Props } from './type'
import { ChangeAvatar } from 'components/ChangeAvatar'
import { userService } from 'services/user'

export const ProfileForm: FC<Props> = ({ user }) => {
  const [login, setLogin] = useState<string>(user.login)
  const [firstName, setFirstName] = useState<string>(user.firstName)
  const [secondName, setSecondName] = useState<string>(user.secondName)
  const [displayName, setDisplayName] = useState<string>(user.displayName)
  const [email, setEmail] = useState<string>(user.email)
  const [phone, setPhone] = useState<string>(user.phone)

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    await userService.chaneProfile({
      login,
      firstName,
      secondName,
      displayName,
      email,
      phone,
    })
  }

  const handleInputChange = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      const target = event.currentTarget
      const name = target.name

      switch (name) {
        case 'login':
          setLogin(target.value)
          break
        case 'firstName':
          setFirstName(target.value)
          break
        case 'secondName':
          setSecondName(target.value)
          break
        case 'displayName':
          setDisplayName(target.value)
          break
        case 'email':
          setEmail(target.value)
          break
        case 'phone':
          setPhone(target.value)
          break
      }
    },
    []
  )
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="card mx-auto  w-full max-w-sm flex-shrink-0 bg-base-100 shadow-2xl"
      >
        <ChangeAvatar url={user.avatar} />
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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
              name="secondName"
            ></input>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Имя в игре</span>
            </label>
            <input
              type="text"
              className="input input-bordered"
              value={displayName}
              onChange={handleInputChange}
              name="displayName"
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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
              name="phone"
            ></input>
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Сохранить
            </button>
          </div>
        </div>
      </form>
    </>
  )
}
