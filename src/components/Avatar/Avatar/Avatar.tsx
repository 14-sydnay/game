import React, { FC } from 'react'

import { Props } from './type'
import { AvatarPlaceholder } from 'components/Avatar'

export const Avatar: FC<Props> = ({ url, size = 'normal' }) => {
  if (!url) return <AvatarPlaceholder size={size} />
  const style = size === 'normal' ? 'w-24' : 'w-12'
  return (
    <figure className="avatar">
      <div className={`${style} rounded-full`}>
        <img src={url}></img>
      </div>
    </figure>
  )
}
