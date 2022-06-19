import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavLinks: React.FC<{}> = () => {
  return (
    <>
      <li>
        <NavLink
          to="/leaderboard"
          className={({ isActive }) =>
            isActive ? 'btn btn-primary' : undefined
          }
        >
          Лидерборд
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/forum"
          className={({ isActive }) =>
            isActive ? 'btn btn-primary' : undefined
          }
        >
          Форум
        </NavLink>
      </li>
    </>
  )
}
