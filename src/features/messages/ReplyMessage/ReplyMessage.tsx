import React from 'react'
import { useSelector } from 'react-redux'

import { MessagesState, selectMessageById } from '../messagesSlice'
import { Props } from './types'
import { AuthorName } from 'features/authors/AuthorName'

export const ReplyMessage: React.FC<Props> = ({ id: messageId }) => {
  const message = useSelector((state: { messages: MessagesState }) =>
    selectMessageById(state, messageId)
  )
  const notFound = <div>Сообщение удалено...</div>

  return message ? (
    <div
      key={message.id}
      className="m-4 flex flex-col rounded-xl border bg-slate-200 p-4"
    >
      <AuthorName authorId={message.authorId} />
      <p>{message.text}</p>
    </div>
  ) : (
    notFound
  )
}
