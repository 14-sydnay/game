import { MenuIcon } from '@heroicons/react/solid'
import React from 'react'
import { Link } from 'react-router-dom'

import { NavLinks } from './NavLinks'
import { Avatar } from 'components/Avatar'
import { useAuth } from 'hooks/auth'

export const Navbar: React.FC<{}> = () => {
  const auth = useAuth()
  const avatarUrl = auth.user?.avatar || ''
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <MenuIcon className="h-5 w-5" />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
          >
            <NavLinks />
          </ul>
        </div>
        <Link to="/">
          <span className="btn btn-ghost text-xl normal-case">Red Runner</span>
        </Link>
      </div>
      <nav className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <NavLinks />
        </ul>
      </nav>
      <div className="navbar-end">
        {auth.user ? (
          <Link to="/profile">
            <Avatar url={avatarUrl} size="small" />
          </Link>
        ) : (
          <Link to="/login" className="btn btn-secondary">
            Войти
          </Link>
        )}
      </div>
    </div>
  )
}
