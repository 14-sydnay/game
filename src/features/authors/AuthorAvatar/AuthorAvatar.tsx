import React, { FC } from 'react'
import { useSelector } from 'react-redux'

import { getAuthorById } from '../authorsSlice'
import { Props } from './types'
import { Avatar } from 'components/Avatar'

export const AuthorAvatar: FC<Props> = ({ authorId }) => {
  const author = useSelector((state) => getAuthorById(state, authorId))

  return author ? (
    <Avatar url={author.avatarUrl} size="small" />
  ) : (
    <Avatar url={''} size="small" />
  )
}
