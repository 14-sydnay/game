import React, { FC } from 'react'

import { Props } from './type'

export const AvatarPlaceholder: FC<Props> = ({ size = 'normal' }) => {
  const style = size === 'normal' ? 'w-24' : 'w-12'
  return (
    <figure className="avatar placeholder ">
      <div
        className={`${style} rounded-full bg-primary-focus text-primary-content`}
      >
        <span className="text-2xl">RR</span>
      </div>
    </figure>
  )
}
