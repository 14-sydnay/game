import axios from 'axios'
import React, { useState, useMemo, useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import { AvatarCell } from './AvatarCell'
import { FetchedData, LeaderboardData } from './type'
import { Footer } from 'components/Footer'
import { Navbar } from 'components/Navbar'
import { Table } from 'components/Table'

export const LeaderboardPage: React.FC<{}> = () => {
  const [data, setData] = useState<LeaderboardData[]>([])

  useEffect(() => {
    axios
      .post('https://ya-praktikum.tech/api/v2/leaderboard/sydney', {
        ratingFieldName: 'score',
        cursor: 0,
        limit: 10,
      })
      .then((res: { data: FetchedData[] }) => {
        const leaders: LeaderboardData[] = []
        res.data.map((item: FetchedData) => {
          leaders.push(item.data)
        })
        return setData(leaders)
      })
      .catch((err) => {
        console.log(err)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <Table columns={columns} data={data} />
      </div>
      <div className="item w-full">
        <Footer />
      </div>
      <Outlet />
    </div>
  )
}
