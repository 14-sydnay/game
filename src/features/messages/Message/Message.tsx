import dayjs from 'dayjs'
import React from 'react'

import { ReplyMessage } from '../ReplyMessage'
import { Props } from './types'
import { AuthorAvatar } from 'features/authors/AuthorAvatar'
import { AuthorName } from 'features/authors/AuthorName'
import { Reaction } from 'features/messages/Reaction'
import { ReplyModal } from 'features/messages/ReplyModal'

export const Message: React.FC<Props> = ({ message }) => {
  return (
    <div
      key={message.id}
      className="mt-10 w-full rounded-xl border bg-white p-5 shadow-md"
    >
      <div className="flex w-full items-center justify-between border-b pb-3">
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <AuthorAvatar authorId={message.authorId} />
          </div>
          <AuthorName authorId={message.authorId} />
        </div>
        <div className="flex items-center space-x-8">
          <div className="text-neutral-500">
            {dayjs(message.created).format('DD.MM.YYYY HH:mm')}
          </div>
        </div>
      </div>
      {
        <div className="mt-4 mb-6">
          {message.replyMessageId && (
            <ReplyMessage id={message.replyMessageId} />
          )}
          <p className="text-neutral-600">{message.text}</p>
        </div>
      }
      <div className="flex items-center justify-between">
        <div className={'flex items-center gap-x-10'}>
          <span>#{message.id}</span>
          <Reaction messageId={message.id} />
        </div>
        <ReplyModal
          messageText={message.text}
          threadId={message.threadId}
          replyMessageId={message.id}
        />
      </div>
    </div>
  )
}
