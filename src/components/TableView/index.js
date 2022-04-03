import {useTable, useSortBy, usePagination} from 'react-table'
import React from 'react'

import Profile from '../Profile'
import MessageImage from '../MessageImage'
import Category from '../Category'
import ButtonComponent from '../ButtonComponent'

import {
  TableStyle,
  TrRowStyle1,
  TableBodyTr,
  TableBodyTd,
  ColumnThRow,
  PaginationContainer,
} from './styledComponents'

let parsedTableData = []

const TableView = props => {
  const {passUpdateUserToTable} = props
  const getLocalStorageData = localStorage.getItem('tableData')
  if (getLocalStorageData !== null) {
    parsedTableData = JSON.parse(getLocalStorageData)
  }

  const getIcons = column => {
    if (column.isSorted) {
      if (column.isSortedDesc) {
        return '🔽'
      }
      return '🔼'
    }
    return null
  }

  const data = React.useMemo(() => [...parsedTableData], [])

  const columns = React.useMemo(
    () => [
      {
        Header: 'TITLE',
        accessor: 'title',
        Cell: cellProps => {
          const {row} = cellProps
          const {original} = row
          const {title} = original
          const slicedTitle = title.slice(0, 22)
          return slicedTitle
        },
      },
      {
        Header: 'REPORTED ON',
        accessor: 'postedAt',
      },
      {
        Header: 'REPORTED BY',
        accessor: 'userName',
        Cell: cellProps => {
          const {row} = cellProps
          const {original} = row
          const {profilePic, userName} = original
          return <Profile profilePic={profilePic} userName={userName} />
        },
      },
      {
        Header: 'CATEGORY',
        accessor: 'col4',
        Cell: cellProps => {
          const {row} = cellProps
          const {original} = row
          const {tag1, tag2} = original
          return <Category tag1={tag1} tag2={tag2} />
        },
      },
      {
        Header: 'STATUS',
        accessor: 'STATUS',
        Cell: cellProps => {
          const {row} = cellProps
          const {original} = row
          const {isApproved, userName, userId, postId} = original
          const updateUserFromTable = () => {
            passUpdateUserToTable(userName, userId, postId)
          }
          return (
            <ButtonComponent
              isApproved={isApproved}
              marginStatus="true"
              updateUserStatus={updateUserFromTable}
            />
          )
        },
      },
      {
        Header: 'MESSAGES',
        accessor: 'commentsCount',
        Cell: cellProps => {
          const {row} = cellProps
          const {original} = row
          const {commentsCount} = original
          return (
            <MessageImage
              commentsCount={commentsCount}
              url="https://res.cloudinary.com/image-link-getter/image/upload/v1648194797/Screenshot_2022-03-25_132259_epn2h4.png"
            />
          )
        },
      },
    ],
    [passUpdateUserToTable],
  )

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
    state: {pageIndex},
  } = useTable(
    {columns, data, initialState: {pageIndex: 0}},
    useSortBy,
    usePagination,
  )

  return (
    <>
      <TableStyle {...getTableProps()} style={{}}>
        <thead>
          {headerGroups.map(headerGroup => (
            <TrRowStyle1 {...headerGroup.getHeaderGroupProps()} style={{}}>
              {headerGroup.headers.map(column => (
                <ColumnThRow
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  style={{
                    borderBottom: 'solid 2px #d7dfe9',
                  }}
                >
                  {column.render('Header')}
                  <span>{getIcons(column)}</span>
                </ColumnThRow>
              ))}
            </TrRowStyle1>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row)
            return (
              <TableBodyTr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <TableBodyTd {...cell.getCellProps()} style={{}}>
                    {cell.render('Cell')}
                  </TableBodyTd>
                ))}
              </TableBodyTr>
            )
          })}
        </tbody>
      </TableStyle>
      <PaginationContainer>
        <button
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
          type="button"
        >
          {'<<'}
        </button>{' '}
        <button
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          type="button"
        >
          {'<'}
        </button>{' '}
        <button
          onClick={() => nextPage()}
          disabled={!canNextPage}
          type="button"
        >
          {'>'}
        </button>{' '}
        <button
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
          type="button"
        >
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
      </PaginationContainer>
    </>
  )
}

export default TableView
