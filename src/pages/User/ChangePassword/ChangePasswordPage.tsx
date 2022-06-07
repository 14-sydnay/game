import React, { useState } from 'react'

import { userService } from 'Services/user'

export const ChangePasswordPage: React.FC = () => {
  const [oldPassword, setOldPassword] = useState<string>('')
  const [newPassword, setNewPassword] = useState<string>('')

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    await userService.changePassword(oldPassword, newPassword)
  }

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.currentTarget
    const name = target.name
    switch (name) {
      case 'oldPassword':
        setOldPassword(target.value)
        break
      case 'newPassword':
        setNewPassword(target.value)
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
              <span className="label-text">Старый пароль</span>
            </label>
            <input
              type="password"
              className="input input-bordered"
              value={oldPassword}
              onChange={handleInputChange}
              name="oldPassword"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Новый пароль</span>
            </label>
            <input
              type="password"
              className="input input-bordered"
              value={newPassword}
              onChange={handleInputChange}
              name="newPassword"
            />
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Сохранить
            </button>
          </div>
        </div>
      </form>
    </main>
  )
}
