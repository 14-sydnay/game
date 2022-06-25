// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react'
import { Cell } from 'react-table'

export const AvatarCell: React.FC<any> = ({ value, column, row }: Cell) => {
  const src: string = row.original[column.imgAccessor]
  const name: string = value
  return (
    <div className="flex items-center">
      <div className="h-10 w-10 flex-shrink-0">
        <img
          className="h-10 w-10 rounded-full"
          src={src ?? 'https://ui-avatars.com/api/?name=R+R'}
          alt="Аватарка пользователя."
        />
      </div>
      <div className="ml-4">{name}</div>
    </div>
  )
}
