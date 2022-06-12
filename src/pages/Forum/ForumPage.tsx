import { PlusIcon } from '@heroicons/react/solid'
import React, { useState, useMemo } from 'react'

import { Footer } from 'Components/Footer'
import { Navbar } from 'Components/Navbar'
import { Table, AvatarCell, LastMessageCell } from 'Components/Table'

export const ForumPage: React.FC<{}> = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: 'Ванесса Пупкина',
      title: 'Помощь и поддержка',
      totalMessages: 5,
      threadDateTime: '2022-05-15T14:52:00.000Z',
      lastMessageAuthor: 'Генадий Васильев',
      lastMessageDateTime: '2022-05-19T10:25:00.000Z',
      imgUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
      id: 2,
      name: 'Петя Шишкин',
      title: 'Предложения и пожелания',
      totalMessages: 3,
      threadDateTime: '2022-03-01T13:22:00.000Z',
      lastMessageAuthor: 'Дмитрий Лебедев',
      lastMessageDateTime: '2022-04-22T18:22:00.000Z',
      imgUrl:
        'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
      id: 3,
      name: 'Иван Иванов',
      title: 'Флудилка',
      totalMessages: 100500,
      threadDateTime: '2022-04-05T10:48:00.000Z',
      lastMessageAuthor: 'Евгений Добровольский',
      lastMessageDateTime: '2022-05-15T14:52:00.000Z',
      imgUrl:
        'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
  ])

  const columns = useMemo(
    () => [
      {
        Header: 'Посты',
        Cell: AvatarCell,
        accessor: 'title',
        imgAccessor: 'imgUrl',
        nameAccessor: 'name',
        threadDateTimeAccessor: 'threadDateTime',
      },
      {
        Header: 'Количество сообщений',
        accessor: 'totalMessages',
        sortMethod: (a: number, b: number) => a - b,
      },
      {
        Header: 'Последнее сообщение',
        Cell: LastMessageCell,
        accessor: 'lastMessageDateTime',
        nameAccessor: 'lastMessageAuthor',
      },
    ],
    []
  )

  return (
    <div className="flex h-screen w-full flex-col items-center">
      <div className="item w-full">
        <Navbar />
      </div>
      <div className="item w-full flex-auto">
        <div className="bg-gray-100 text-gray-900">
          <main className="mx-auto max-w-5xl px-4 pt-4 sm:px-6 lg:px-8">
            <button type="button" className="btn btn-outline btn-success gap-2">
              <PlusIcon className="h-6 w-6" />
              Новый пост
            </button>
            <div>
              <h1 className="text-center text-xl font-semibold">Посты</h1>
            </div>
            <div className="mt-6 flex flex-col">
              <Table columns={columns} data={data} />
            </div>
          </main>
        </div>
      </div>
      <div className="item w-full">
        <Footer />
      </div>
    </div>
  )
}
