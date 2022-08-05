import React, { FC } from 'react'

import { Props } from './type'
import { CreateMessageForm } from 'components/CreateMessageForm'

export const ReplyModal: FC<Props> = ({ messageText, threadId, messageId }) => {
  return (
    <>
      <label htmlFor="my-modal-3" className="modal-button btn btn-ghost">
        Ответить
      </label>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-circle btn-sm absolute right-2 top-2"
          >
            ✕
          </label>
          <p className="py-4">{messageText}</p>
          <CreateMessageForm threadId={threadId} replyMessageId={messageId} />
        </div>
      </div>
    </>
  )
}
