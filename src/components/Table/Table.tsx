// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import {
  ChevronDoubleLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDoubleRightIcon,
  ArrowSmUpIcon,
  ArrowSmDownIcon,
  SwitchVerticalIcon,
} from '@heroicons/react/solid'
import React, { useState } from 'react'
import {
  useTable,
  useFilters,
  useGlobalFilter,
  useAsyncDebounce,
  useSortBy,
  usePagination,
} from 'react-table'

import { MobilePagination, Pagination } from 'Components/Pagination'

function GlobalFilter({ preGlobalFilteredRows, globalFilter, setGlobalFilter }) {
  const [value, setValue] = useState(globalFilter)

  const threadsCount = preGlobalFilteredRows.length

  const onChange = useAsyncDebounce((data) => {
    setGlobalFilter(data || undefined)
  }, 200)

  return (
    <label className="flex items-baseline gap-x-2">
      <span className="text-gray-700">Поиск: </span>
      <input
        type="text"
        className="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        value={value || ''}
        onChange={(e) => {
          setValue(e.target.value)
          onChange(e.target.value)
        }}
        placeholder={`Всего постов: ${threadsCount}`}
      />
    </label>
  )
}

export function Table({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state,
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  )

  return (
    <>
      <div className="self-end sm:flex sm:gap-x-2">
        <GlobalFilter
          preGlobalFilteredRows={preGlobalFilteredRows}
          globalFilter={state.globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
        {headerGroups.map((headerGroup) =>
          headerGroup.headers.map((column) =>
            column.Filter ? (
              <div className="mt-2 sm:mt-0" key={column.id}>
                {column.render('Filter')}
              </div>
            ) : null
          )
        )}
      </div>
      <div className="mt-4 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
              <table {...getTableProps()} className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  {headerGroups.map((headerGroup, index) => (
                    <tr key={index} {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        <th
                          scope="col"
                          key={column.id}
                          className="group px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                          {...column.getHeaderProps(column.getSortByToggleProps())}
                        >
                          <div className="flex items-center justify-between">
                            {column.render('Header')}
                            <span>
                              {column.isSorted ? (
                                column.isSortedDesc ? (
                                  <ArrowSmDownIcon className="h-4 w-4 text-gray-400" />
                                ) : (
                                  <ArrowSmUpIcon className="h-4 w-4 text-gray-400" />
                                )
                              ) : (
                                <SwitchVerticalIcon className="h-4 w-4 text-gray-400 opacity-0 group-hover:opacity-100" />
                              )}
                            </span>
                          </div>
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()} className="divide-y divide-gray-200 bg-white">
                  {page.map((row) => {
                    prepareRow(row)
                    return (
                      <tr key={row.id} {...row.getRowProps()}>
                        {row.cells.map((cell, index) => {
                          return (
                            <td
                              key={index}
                              {...cell.getCellProps()}
                              className="whitespace-nowrap px-6 py-4"
                              role="cell"
                            >
                              {cell.column.Cell.name === 'defaultRenderer' ? (
                                <div className="text-sm text-gray-500">{cell.render('Cell')}</div>
                              ) : (
                                cell.render('Cell')
                              )}
                            </td>
                          )
                        })}
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between py-3">
        <div className="flex flex-1 justify-between sm:hidden">
          <MobilePagination onClick={() => previousPage()} disabled={!canPreviousPage}>
            Назад
          </MobilePagination>
          <MobilePagination onClick={() => nextPage()} disabled={!canNextPage}>
            Вперед
          </MobilePagination>
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div className="flex items-baseline gap-x-2">
            <span className="text-sm text-gray-700">
              Страница <span className="font-medium">{state.pageIndex + 1}</span> из{' '}
              <span className="font-medium">{pageOptions.length}</span>
            </span>
            <label>
              <span className="sr-only">Постов на страницу</span>
              <select
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                value={state.pageSize}
                onChange={(e) => {
                  setPageSize(Number(e.target.value))
                }}
              >
                {[5, 10, 20].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    Показать {pageSize}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div>
            <nav
              className="relative z-0 inline-flex -space-x-px rounded-md shadow-sm"
              aria-label="Pagination"
            >
              <Pagination
                className="rounded-l-md"
                onClick={() => gotoPage(0)}
                disabled={!canPreviousPage}
              >
                <span className="sr-only">Первая страница</span>
                <ChevronDoubleLeftIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </Pagination>
              <Pagination onClick={() => previousPage()} disabled={!canPreviousPage}>
                <span className="sr-only">Предыдущая страница</span>
                <ChevronLeftIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </Pagination>
              <Pagination onClick={() => nextPage()} disabled={!canNextPage}>
                <span className="sr-only">Следущая страница</span>
                <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </Pagination>
              <Pagination
                className="rounded-r-md"
                onClick={() => gotoPage(pageCount - 1)}
                disabled={!canNextPage}
              >
                <span className="sr-only">Последняя страница</span>
                <ChevronDoubleRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </Pagination>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}
