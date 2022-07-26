import dayjs from 'dayjs'
import React, { useState } from 'react'

import { Avatar } from 'components/Avatar'
import { Footer } from 'components/Footer'
import { Navbar } from 'components/Navbar'
import { TextArea } from 'components/TextArea'

export const ThreadPage: React.FC<{}> = () => {
  const [data, setData] = useState({
    threadId: 1,
    threadTitle: 'Помощь и поддержка',
    threadDateTime: '2022-05-15T14:52:00.000Z',
    authorName: 'Ванесса Пупкина',
    authorImg:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    messages: [
      {
        id: 1,
        name: 'Ванесса Пупкина',
        imgUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
        message: 'Помогите и поддержите пожалуйста наш проект',
        messageDateTime: '2022-05-15T14:52:00.000Z',
        replyMessageId: null,
      },
      {
        id: 2,
        name: 'Иван Иванов',
        imgUrl:
          'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
        message: 'Обязательно поможем и поддержим проект как можно быстрее',
        messageDateTime: '2022-05-15T14:55:00.000Z',
        replyMessageId: 1,
      },
      {
        id: 3,
        name: 'Петя Шишкин',
        imgUrl:
          'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
        message: 'Возможно мы можем помочь и поддержать проект, но это неточно',
        messageDateTime: '2022-05-15T14:55:00.000Z',
        replyMessageId: 2,
      },
    ],
  })

  return (
    <div className="flex h-screen w-full flex-col items-center">
      <div className="item w-full">
        <Navbar />
      </div>
      <div className="item w-full flex-auto">
        <div className="bg-gray-100 text-gray-900">
          <main className="mx-auto max-w-5xl px-4 pt-4 sm:px-6 lg:px-8">
            <div className="mt-10 flex items-center">
              <Avatar url={data.authorImg} size="medium" />
              <div className="ml-4">
                <h1 className="text-lg font-medium text-gray-900">
                  {data.threadTitle}
                </h1>
                <div className="flex flex-row">
                  <span className="text-md text-gray-500">
                    {data.authorName}
                  </span>
                  <span className="divider divider-horizontal mx-1" />
                  <span className="text-md text-gray-500">
                    {dayjs(data.threadDateTime).format('DD.MM.YYYY HH:mm')}
                  </span>
                </div>
              </div>
            </div>
            <div className=" flex flex-col items-center">
              {data.messages.map((message) => (
                <div
                  key={message.id}
                  className="mt-10 w-full rounded-xl border bg-white p-5 shadow-md"
                >
                  <div className="flex w-full items-center justify-between border-b pb-3">
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <Avatar url={message.imgUrl} size="small" />
                      </div>
                      <div className="font-bold text-slate-700">
                        {message.name}
                      </div>
                    </div>
                    <div className="flex items-center space-x-8">
                      <div className="text-neutral-500">
                        {dayjs(message.messageDateTime).format(
                          'DD.MM.YYYY HH:mm'
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 mb-6">
                    {message.replyMessageId && (
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
                    )}
                    <p className="text-neutral-600">{message.message}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>#{message.id}</span>
                    <button className="btn btn-ghost">Ответить</button>
                  </div>
                </div>
              ))}
            </div>
            <TextArea />
          </main>
        </div>
      </div>
      <div className="item w-full">
        <Footer />
      </div>
    </div>
  )
}
