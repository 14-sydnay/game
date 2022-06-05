import React from 'react'

export const Navbar: React.FC<{}> = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
          >
            <li>
              <a>Лидерборд</a>
            </li>
            <li>
              <a>Форум</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl normal-case">Red Runner</a>
      </div>
      <nav className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <a>Лидерборд</a>
          </li>
          <li>
            <a>Форум</a>
          </li>
        </ul>
      </nav>
      <div className="navbar-end">
        <a className="btn btn-secondary">Войти</a>
      </div>
    </div>
  )
}
