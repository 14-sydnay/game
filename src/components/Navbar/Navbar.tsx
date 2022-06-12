import { MenuIcon } from '@heroicons/react/solid'
import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'

export const Navbar: React.FC<{}> = () => {
  const navLinks: ReactElement = (
    <>
      <li>
        <a>Лидерборд</a>
      </li>
      <li>
        <Link to="/forum">
          <span>Форум</span>
        </Link>
      </li>
    </>
  )
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
            {navLinks}
          </ul>
        </div>
        <Link to="/">
          <span className="btn btn-ghost text-xl normal-case">Red Runner</span>
        </Link>
      </div>
      <nav className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{navLinks}</ul>
      </nav>
      <div className="navbar-end">
        <a className="btn btn-secondary">Войти</a>
      </div>
    </div>
  )
}
