// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import dayjs from 'dayjs'
import React from 'react'
import { Link } from 'react-router-dom'
import { Cell } from 'react-table'
import { Avatar } from 'components/Avatar'

export const AvatarCell: React.FC<any> = ({ value, column, row }: Cell) => {
  const threadId: number = row.original.id
  const src: string = row.original[column.imgAccessor]
  const date: string = row.original[column.threadDateTimeAccessor]
  const name: string = row.original[column.nameAccessor]
  const title: string = value
  return (
    <div className="flex items-center">
      <Avatar url={src} size="small" />
      <div className="ml-4">
        <Link to={`${threadId}`} className="text-sm font-medium text-gray-900">
          {title}
        </Link>
        <div className="flex flex-row">
          <span className="text-sm text-gray-500">{name}</span>
          <span className="divider divider-horizontal mx-1" />
          <span className="text-sm text-gray-500">
            {dayjs(date).format('DD.MM.YYYY HH:mm')}
          </span>
        </div>
      </div>
    </div>
  )
}

export const LastMessageCell: React.FC<any> = ({
  value,
  column,
  row,
}: Cell) => {
  const name: string = row.original[column.nameAccessor]
  const date: string = value
  return (
    <div className="flex flex-col">
      <div className="text-sm font-medium text-gray-900">{name}</div>
      <div className="flex flex-row">
        <span className="text-sm text-gray-500">
          {dayjs(date).format('DD.MM.YYYY HH:mm')}
        </span>
      </div>
    </div>
  )
}
