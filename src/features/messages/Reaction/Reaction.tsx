import { HeartIcon } from '@heroicons/react/outline'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import {
  MessagesState,
  addMessageReaction,
  removeMessageReaction,
  selectMessageReactionByUser,
  selectMessageById,
} from '../messagesSlice'
import { Props } from './types'
import { useAuth } from 'hooks/auth'

export const Reaction: React.FC<Props> = ({ messageId }) => {
  const dispatch = useDispatch()
  const { user } = useAuth()
  const userId = user ? user.id : -1
  const hasReaction = useSelector((state: { messages: MessagesState }) =>
    selectMessageReactionByUser(state, messageId, userId)
  )
  const message = useSelector((state: { messages: MessagesState }) =>
    selectMessageById(state, messageId)
  )
  const threadId = +useParams().id!

  if (user) {
    const handleAddReaction = () => {
      if (user) {
        void dispatch(
          addMessageReaction({
            threadId,
            messageId: messageId,
            userId: user.id,
          })
        )
      }
    }

    const handleRemoveReaction = () => {
      if (user) {
        void dispatch(
          removeMessageReaction({
            threadId,
            messageId: messageId,
            userId: user.id,
          })
        )
      }
    }
    const heartIcon = hasReaction ? (
      <HeartIcon
        className="swap-on h-8 w-8 fill-current text-red-600"
        onClick={handleRemoveReaction}
      />
    ) : (
      <HeartIcon className="swap-off h-8 w-8" onClick={handleAddReaction} />
    )
    const indicator =
      message != null && message.reactions.length > 0 ? (
        <span className="badge indicator-item badge-secondary">
          {message.reactions.length}
        </span>
      ) : null
    return (
      <div className="indicator">
        <label className="swap swap-rotate">
          <input
            type="checkbox"
            className={'invisible'}
            readOnly
            checked={hasReaction}
          />
          {indicator}
          {heartIcon}
        </label>
      </div>
    )
  } else return null
}
