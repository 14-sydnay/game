import { PlusIcon } from '@heroicons/react/solid'
import { yupResolver } from '@hookform/resolvers/yup'
import React, { useState, useMemo } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'

import { AvatarCell, LastMessageCell } from './cells'
import { FormValues } from './type'
import { Footer } from 'components/Footer'
import { Navbar } from 'components/Navbar'
import { Table } from 'components/Table'

yup.setLocale({
  mixed: {
    default: 'Введите корректные данные',
  },
  string: {
    min: 'Введите название темы',
  },
})

const schema = yup.object().shape({
  title: yup.string().min(1),
})

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

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  })

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data)
    document.getElementById('new-post')?.click()
    reset()
  }

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
            <label
              htmlFor="new-post"
              className="modal-button btn btn-outline btn-success gap-2"
            >
              <PlusIcon className="h-6 w-6" />
              Новый пост
            </label>
            <div>
              <h1 className="text-center text-2xl font-medium">Посты</h1>
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
      <input type="checkbox" id="new-post" className="modal-toggle" />
      <label htmlFor="new-post" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <label
            htmlFor="new-post"
            className="absolute right-4 top-2 cursor-pointer"
          >
            ✕
          </label>
          <h3 className="text-center text-lg font-bold">Новый пост</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Введите тему"
              className="input input-bordered mt-4 w-full"
              {...register('title')}
            />
            <p className="h-4 text-error">{errors.title?.message}</p>
            <button type="submit" className="btn btn-primary float-right">
              Создать
            </button>
          </form>
        </label>
      </label>
    </div>
  )
}
