import {useTable} from 'react-table'
import React from 'react'
import {BsFilter} from 'react-icons/bs'

import Profile from '../Profile'
import MessageImage from '../MessageImage'
import SwitchButton from '../SwitchButton'

import {
  PortalContainer,
  ObservationHeading,
  FilterContainer,
  FilterText,
} from './styledComponents'

const ReportingPortal = props => {
  const {cardData, changePortalSwitchStatus} = props
  const data = React.useMemo(() => [...cardData], [cardData])

  const columns = React.useMemo(
    () => [
      {
        Header: 'TITTLE',
        accessor: 'title',
        Cell: cellProps => {
          const {row} = cellProps
          const {original} = row
          const {title} = original
          const slicedTitle = title.slice(0, 30)
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
        Header: 'SEVERTY',
        accessor: 'col4',
        Cell: () => (
          <button
            type="button"
            style={{
              width: '64px',
              height: '16px',
              fontFamily: 'HKGrotesk',
              fontSize: '12px',
              fontWeight: 'bold',
              fontStretch: 'normal',
              fontStyle: 'normal',
              lineHeight: '1.33',
              backgroundColor: '#ff0b37',
              color: '#ffffff',
              border: 0,
              borderRadius: '6px',
            }}
          >
            HIGH
          </button>
        ),
      },
      {
        Header: 'STATUS',
        accessor: 'col5',
        Cell: 'Closed',
      },
      {
        Header: 'DUE DATE',
        accessor: 'col6',
        Cell: '17/5/2020 at 05:30 PM',
      },
      {
        Header: 'MESSAGES',
        accessor: 'commentsCount',
        Cell: cellProps => {
          const {row} = cellProps
          const {original} = row
          const {commentsCount} = original
          return <MessageImage commentsCount={commentsCount} />
        },
      },
    ],
    [],
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({columns, data})

  const changeSwitchStatusFromPortal = () => {
    changePortalSwitchStatus()
  }

  return (
    <PortalContainer>
      <SwitchButton changeSwitchStatus={changeSwitchStatusFromPortal} />
      <ObservationHeading>Observations Assigned To Me</ObservationHeading>
      <FilterContainer>
        <BsFilter />
        <FilterText>FILTER</FilterText>
      </FilterContainer>
      <table
        {...getTableProps()}
        style={{
          height: '66px',
          margin: ' 24px 100px 0',
          border: 'solid 1px  #d7dfe9',
          marginBottom: '30px',
        }}
      >
        <thead>
          {headerGroups.map(headerGroup => (
            <tr
              {...headerGroup.getHeaderGroupProps()}
              style={{
                width: '33px',
                height: '16px',
                margin: '1px 125px 0 0',
                fontFamily: 'HKGrotesk',
                fontSize: '12px',
                fontWeight: '600',
                fontStretch: 'normal',
                fontStyle: 'normal',
                lineHeight: '1.33',
                letterSpacing: '0.12px',
              }}
            >
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    padding: '10px',
                    borderBottom: 'solid 2px #d7dfe9',
                  }}
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      borderBottom: 'solid 1px #d7dfe9',
                      height: '16px',
                      fontFamily: 'HKGrotesk',
                      fontSize: '13.5px',
                      fontWeight: '600',
                      fontStretch: 'normal',
                      fontStyle: 'normal',
                      lineHeight: '1.33',
                      letterSpacing: '0.12px',
                      color: '#7e858e',
                      padding: '10px 20px 10px 20px',
                    }}
                  >
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            )
          })}
        </tbody>
      </table>
    </PortalContainer>
  )
}

export default ReportingPortal
