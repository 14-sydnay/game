import dayjs from 'dayjs'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { Props } from './types'
import { CreateMessageForm } from 'components/CreateMessageForm'
import { Footer } from 'components/Footer'
import { Navbar } from 'components/Navbar'
import { AuthorAvatar } from 'features/authors/AuthorAvatar'
import { AuthorName } from 'features/authors/AuthorName'
import {
  fetchMessages,
  selectAllMessages,
} from 'features/messages/messagesSlice'
import { ThreadInfo } from 'features/threads/ThreadInfo'

export const ThreadPage: React.FC<Props> = () => {
  const { id } = useParams()
  const threadId = Number.parseInt(id as string)
  const messages = useSelector((state) => selectAllMessages(state, threadId))
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
                        {dayjs(message.createdAt).format('DD.MM.YYYY HH:mm')}
                      </div>
                    </div>
                  </div>
                  {
                    <div className="mt-4 mb-6">
                      {/*  {message.replyMessageId && (
                        <div className="m-4 flex flex-col rounded-xl border bg-slate-200 p-4">
                          <p className="text-sm">
                            {
                              data.messages?.find(
                                (m) => m.id === message.replyMessageId
                              )?.name
                            }
                          </p>
                          <p>
                            {
                              data.messages?.find(
                                (m) => m.id === message.replyMessageId
                              )?.message
                            }
                          </p>
                        </div>
                      )} */}
                      <p className="text-neutral-600">{message.text}</p>
                    </div>
                  }
                  <div className="flex items-center justify-between">
                    <span>#{message.id}</span>
                    <button className="btn btn-ghost">Ответить</button>
                  </div>
                </div>
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
