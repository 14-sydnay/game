// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import dayjs from 'dayjs'
import React, { ReactElement } from 'react'
import { Cell } from 'react-table'

export function AvatarCell({ value, column, row }: Cell): ReactElement {
  const src: string = row.original[column.imgAccessor]
  const date: string = row.original[column.threadDateTimeAccessor]
  const name: string = row.original[column.nameAccessor]
  const title: string = value
  return (
    <div className="flex items-center">
      <div className="h-10 w-10 flex-shrink-0">
        <img className="h-10 w-10 rounded-full" src={src} alt="" />
      </div>
      <div className="ml-4">
        <div className="text-sm font-medium text-gray-900">{title}</div>
        <div className="flex flex-row">
          <span className="text-sm text-gray-500">{name}</span>
          <span className="divider divider-horizontal mx-1" />
          <span className="text-sm text-gray-500">{dayjs(date).format('DD-MM-YYYY HH:mm')}</span>
        </div>
      </div>
    </div>
  )
}

export function LastMessageCell({ value, column, row }: Cell): ReactElement {
  const name: string = row.original[column.nameAccessor]
  const date: string = value
  return (
    <div className="flex flex-col">
      <div className="text-sm font-medium text-gray-900">{name}</div>
      <div className="flex flex-row">
        <span className="text-sm text-gray-500">{dayjs(date).format('DD-MM-YYYY HH:mm')}</span>
      </div>
    </div>
  )
}
