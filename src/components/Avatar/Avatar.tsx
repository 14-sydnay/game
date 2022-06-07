import React, { FC } from 'react'

import { Props } from './type'
import { AvatarPlaceholder } from 'Components/AvatarPlaceholder'

export const Avatar: FC<Props> = ({ url }) => {
  if (!url) return <AvatarPlaceholder />

  return (
    <figure className="avatar">
      <div className="w-24 rounded-full">
        <img src={url}></img>
      </div>
    </figure>
  )
}
