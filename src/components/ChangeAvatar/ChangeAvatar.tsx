import React, { FC } from 'react'

import { Props } from './type'
import { Avatar } from 'Components/Avatar'

export const ChangeAvatar: FC<Props> = ({ url }) => {
  const handleClick = () => {
    alert('еще не готово')
  }
  return (
    <>
      <Avatar url={url}></Avatar>
      <button onClick={handleClick}>Изменить</button>
    </>
  )
}
