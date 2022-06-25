import React, { FC } from 'react'

import { Props } from './type'
import { AvatarPlaceholder } from 'components/Avatar'

export const Avatar: FC<Props> = ({ url, size = 'large' }) => {
  if (!url) return <AvatarPlaceholder size={size} />
  let style = ''
  switch (size) {
    case 'small':
      style = 'w-12'
      break
    case 'medium':
      style = 'w-16'
      break
    case 'large':
      style = 'w-24'
      break
  }

  return (
    <figure className="avatar">
      <div className={`${style} rounded-full`}>
        <img src={url}></img>
      </div>
    </figure>
  )
}
