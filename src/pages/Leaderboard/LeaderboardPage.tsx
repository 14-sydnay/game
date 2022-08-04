import React, { useState, useMemo, useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import { AvatarCell } from './AvatarCell'
import { Footer } from 'components/Footer'
import { Navbar } from 'components/Navbar'
import { Table } from 'components/Table'
import { LeaderData } from 'models/forum'
import { forumService } from 'services/forum'

export const LeaderboardPage: React.FC<{}> = () => {
  const [leaders, setLeaders] = useState<LeaderData[]>([])

  useEffect(() => {
    forumService
      .getLeaders('sydney', {
        ratingFieldName: 'score',
        cursor: 0,
        limit: 10,
      })
      .then((leadersData) => setLeaders(leadersData))
      .catch((err) => console.log(err.message))
  }, [])

  const columns = useMemo(
    () => [
      {
        Header: 'Игрок',
        Cell: AvatarCell,
        accessor: 'name',
        imgAccessor: 'imgUrl',
      },
      {
        Header: 'Баллы',
        accessor: 'score',
        sortMethod: (a: number, b: number) => a - b,
      },
    ],
    []
  )

  return (
    <div className="flex h-screen w-full flex-col items-center">
      <div className="item w-full">
        <Navbar />
      </div>
      <div className="item w-3/4 flex-auto">
        <h1 className="my-4 text-center text-2xl font-medium">Лидерборд</h1>
        <Table columns={columns} data={leaders} />
      </div>
      <div className="item w-full">
        <Footer />
      </div>
      <Outlet />
    </div>
  )
}
