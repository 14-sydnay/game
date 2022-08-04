import dayjs from 'dayjs'
import React, { FC, useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { selectThreadById, ThreadsState } from '../threadsSlice'
import { Props } from './types'
import { AuthorAvatar } from 'features/authors/AuthorAvatar'
import { AuthorName } from 'features/authors/AuthorName'
import { Thread } from 'src/server/models/thread'

export const ThreadInfo: FC<Props> = ({ threadId }) => {
  const [thread, setThread] = useState<Thread>()
  const threadData = useSelector((state: { threads: ThreadsState }) =>
    selectThreadById(state, threadId)
  ) as Thread

  useEffect(() => {
    setThread(threadData)
  }, [threadData])

  return thread ? (
    <div className="mt-10 flex items-center">
      <AuthorAvatar authorId={thread.authorId} />
      <div className="ml-4">
        <h1 className="text-lg font-medium text-gray-900">{thread.title}</h1>
        <div className="flex flex-row">
          <AuthorName authorId={thread.authorId} />
          <span className="divider divider-horizontal mx-1" />
          <span className="text-md text-gray-500">
            {dayjs(thread.created).format('DD.MM.YYYY HH:mm')}
          </span>
        </div>
      </div>
    </div>
  ) : (
    <div>Тема не найдена</div>
  )
}
