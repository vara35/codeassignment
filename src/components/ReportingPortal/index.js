import {useTable} from 'react-table'
import React from 'react'
import {BsFilter} from 'react-icons/bs'

import Header from '../Header'
import SwitchButton from '../SwitchButton'

import {
  PortalContainer,
  ObservationHeading,
  FilterContainer,
  FilterText,
} from './styledComponents'

const ReportingPortal = props => {
  const {cardData, changeSwitchStatus} = props
  const data = React.useMemo(
    () => [
      {
        ...cardData[0],
        col4: 'High',
        col5: 'ACTION IN PROGRESS',
        col6: '17/5/2020 at 05:30 PM',
        col7: 'Hello',
      },
      {
        ...cardData[1],
        col4: 'Low',
        col5: 'CLOSED',
        col6: '17/5/2020 at 05:30 PM',
        col7: 'Hello',
      },
      {
        ...cardData[2],
        col4: 'Warning',
        col5: 'RESOLVE',
        col6: '17/5/2020 at 05:30 PM',
        col7: 'Hello',
      },
      {
        ...cardData[3],
        col4: 'Low',
        col5: 'CLOSED',
        col6: '17/5/2020 at 05:30 PM',
        col7: 'Hello',
      },
      {
        ...cardData[4],
        col4: 'Warning',
        col5: 'ACTION IN PROGRESS',
        col6: '17/5/2020 at 05:30 PM',
        col7: 'Hello',
      },
      {
        ...cardData[5],
        col4: 'High',
        col5: 'CLOSED',
        col6: '17/5/2020 at 05:30 PM',
        col7: 'Hello',
      },
      {
        ...cardData[6],
        col4: 'High',
        col5: 'REPORTED',
        col6: '17/5/2020 at 05:30 PM',
        col7: 'Hello',
      },
      {
        ...cardData[7],
        col4: 'Low',
        col5: 'CLOSED',
        col6: '17/5/2020 at 05:30 PM',
        col7: 'Hello',
      },
      {
        ...cardData[8],
        col4: 'High',
        col5: 'REPORTED',
        col6: '17/5/2020 at 05:30 PM',
        col7: 'Hello',
      },
      {
        ...cardData[9],
        col4: 'Low',
        col5: 'CLOSED',
        col6: '17/5/2020 at 05:30 PM',
        col7: 'Hello',
      },
      {
        ...cardData[10],
        col4: 'Warning',
        col5: 'ACTION IN PROGRESS',
        col6: '17/5/2020 at 05:30 PM',
        col7: 'Hello',
      },
    ],
    [cardData],
  )

  const columns = React.useMemo(
    () => [
      {
        Header: 'TITTLE',
        accessor: 'title',
      },
      {
        Header: 'REPORTED ON',
        accessor: 'postedAt',
      },
      {
        Header: 'REPORTED BY',
        accessor: 'userName',
      },
      {
        Header: 'SEVERTY',
        accessor: 'col4',
      },
      {
        Header: 'STATUS',
        accessor: 'col5',
      },
      {
        Header: 'DUE DATE',
        accessor: 'col6',
      },
      {
        Header: 'MESSAGES',
        accessor: 'commentsCount',
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
    changeSwitchStatus()
  }

  return (
    <PortalContainer>
      <Header />
      <SwitchButton changeSwitchStatus={changeSwitchStatusFromPortal} />
      <ObservationHeading>Observations Assigned To Me</ObservationHeading>
      <FilterContainer>
        <BsFilter />
        <FilterText>FILTER</FilterText>
      </FilterContainer>
      <table
        {...getTableProps()}
        style={{border: '1px solid #d7dfe9', margin: '1px 100px 1px 100px'}}
      >
        <thead>
          {headerGroups.map(headerGroup => (
            <tr
              {...headerGroup.getHeaderGroupProps()}
              style={{
                margin: '24px 100px 0',
                padding: '24px 34px 23px 68px',
                backgroundColor: '#ffffff',
                borderBottom: 'solid 1px #d7dfe9',
                width: '33px',
                height: '50px',
                fontFamily: 'HKGrotesk',
                fontSize: '12px',
              }}
            >
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()} style={{}}>
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
                      backgroundColor: '#ffffff',
                      height: '64px',
                      fontFamily: 'HKGrotesk',
                      fontSize: '16px',
                      fontWeight: '600',
                      fontStretch: 'normal',
                      fontStyle: 'normal',
                      lineHeight: '1.33',
                      letterSpacing: '0.12px',
                      color: '#171f46',
                      padding: '20px',
                    }}
                  >
                    {cell.row.values.userName === 'Rama krishna' ? (
                      <img src={cell.row.values.profilePic} alt="img" />
                    ) : null}
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
