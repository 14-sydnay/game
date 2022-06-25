import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAuth } from 'hooks/auth'
export const LogoutButton: FC = () => {
  const navigate = useNavigate()
  const auth = useAuth()
  const handleClick = () => {
    auth
      .logout()
      .then(() => navigate('/'))
      .catch((e) => {
        console.log(e)
      })
  }
  return (
    <button
      onClick={() => handleClick()}
      type="button"
      className="btn btn-link mt-4"
    >
      Выход
    </button>
  )
}
