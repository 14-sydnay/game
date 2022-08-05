import React, { FC, useRef } from 'react'

import { Props } from './type'
import { CreateMessageForm } from 'features/messages/CreateMessageForm'

export const ReplyModal: FC<Props> = ({
  messageText,
  threadId,
  replyMessageId,
}) => {
  const checkbox = useRef(null)
  const onCreated = () => {
    if (checkbox.current) {
      checkbox.current.checked = !checkbox.current.checked
    }
  }
  return (
    <>
      <label
        htmlFor={`my-modal-${replyMessageId}`}
        className="modal-button btn btn-ghost"
      >
        Ответить
      </label>
      <input
        ref={checkbox}
        type="checkbox"
        id={`my-modal-${replyMessageId}`}
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor={`my-modal-${replyMessageId}`}
            className="btn btn-circle btn-sm absolute right-2 top-2"
          >
            ✕
          </label>
          <p className="py-4">{messageText}</p>
          <CreateMessageForm
            key={replyMessageId}
            threadId={threadId}
            replyMessageId={replyMessageId}
            onCreated={onCreated}
          />
        </div>
      </div>
    </>
  )
}
