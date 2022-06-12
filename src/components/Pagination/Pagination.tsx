import React from 'react'

import { Props } from './type'
import { classNames } from 'Utils/classNames'

export const MobilePagination: React.FC<Props> = ({ children, className, ...rest }) => {
  return (
    <button
      type="button"
      className={classNames(
        'relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50',
        className
      )}
      {...rest}
    >
      {children}
    </button>
  )
}

export const Pagination: React.FC<Props> = ({ children, className, ...rest }) => {
  return (
    <button
      type="button"
      className={classNames(
        'relative inline-flex items-center border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50',
        className
      )}
      {...rest}
    >
      {children}
    </button>
  )
}
