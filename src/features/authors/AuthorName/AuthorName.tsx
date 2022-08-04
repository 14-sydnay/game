import React, { FC } from 'react'
import { useSelector } from 'react-redux'

import { getAuthorById } from '../authorsSlice'
import { Props } from './types'
import { Author } from 'src/server/models/author'

export const AuthorName: FC<Props> = ({ authorId }) => {
  const author = useSelector((state: { authors: Author[] }) =>
    getAuthorById(state, authorId)
  )
  const notFound = <div>Автор не найден</div>
  return author ? (
    <span className="text-sm text-gray-500">{author.name}</span>
  ) : (
    notFound
  )
}
