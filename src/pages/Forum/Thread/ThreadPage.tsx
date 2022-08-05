import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { Props } from './types'
import { CreateMessageForm } from 'components/CreateMessageForm'
import { Footer } from 'components/Footer'
import { Navbar } from 'components/Navbar'
import { Message } from 'features/messages'
import {
  fetchMessages,
  MessagesState,
  selectAllMessages,
} from 'features/messages/messagesSlice'
import { ThreadInfo } from 'features/threads/ThreadInfo'

export const ThreadPage: React.FC<Props> = () => {
  const { id } = useParams()
  const threadId = Number.parseInt(id as string)
  const messages = useSelector((state: { messages: MessagesState }) =>
    selectAllMessages(state)
  )
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchMessages(threadId))
  }, [dispatch])

  return (
    <div className="flex h-screen w-full flex-col items-center">
      <div className="item w-full">
        <Navbar />
      </div>
      <div className="item w-full flex-auto">
        <div className="bg-gray-100 text-gray-900">
          <main className="mx-auto max-w-5xl px-4 pt-4 sm:px-6 lg:px-8">
            <ThreadInfo threadId={threadId} />
            <div className=" flex flex-col items-center">
              {messages.map((message) => (
                <Message message={message} key={message.id} />
              ))}
            </div>
            <CreateMessageForm threadId={threadId} />
          </main>
        </div>
      </div>
      <div className="item w-full">
        <Footer />
      </div>
    </div>
  )
}
