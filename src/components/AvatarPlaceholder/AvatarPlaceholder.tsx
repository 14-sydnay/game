import React, { FC } from 'react'

export const AvatarPlaceholder: FC = () => {
  return (
    <figure className="avatar placeholder ">
      <div className="w-24 rounded-full bg-primary-focus text-primary-content">
        <span className="text-3xl">You</span>
      </div>
    </figure>
  )
}
