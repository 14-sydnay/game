// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react'
import { Cell } from 'react-table'

import { Avatar } from 'components/Avatar'

export const AvatarCell: React.FC<any> = ({ value, column, row }: Cell) => {
  const src: string = row.original[column.imgAccessor]
  const name: string = value
  return (
    <div className="flex items-center">
      <Avatar url={src} size="small" />
      <div className="ml-4">{name}</div>
    </div>
  )
}
