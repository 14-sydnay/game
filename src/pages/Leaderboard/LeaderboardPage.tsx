import React, { useState, useMemo, useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import { Footer } from 'components/Footer'
import { Table } from 'components/Table'
import { Navbar } from 'components/Navbar'
import { AvatarCell } from './AvatarCell'
import axios from 'axios'
import { FetchedData, LeaderboardData } from './type'

export const LeaderboardPage: React.FC<{}> = () => {
  const [data, setData] = useState<LeaderboardData[]>([])

  useEffect(() => {
    axios
      .post('https://ya-praktikum.tech/api/v2/leaderboard/sydney', {
        ratingFieldName: 'score',
        cursor: 0,
        limit: 3,
      })
      .then((res) => {
        const data: LeaderboardData[] = []
        res.data.map((item: FetchedData) => {
          data.push(item.data)
        })
        setData(data)
      })
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
