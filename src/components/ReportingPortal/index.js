import {useTable} from 'react-table'
import React from 'react'

import {PortalContainer, ObservationHeading} from './styledComponents'

const ReportingPortal = props => {
  const {cardData} = props
  const data = React.useMemo(() => [
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
  ])

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

  return (
    <PortalContainer>
      <ObservationHeading>Observations Assigned To Me</ObservationHeading>
      <table {...getTableProps()} style={{border: 'solid 1px grey'}}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    background: 'aliceblue',
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize: '14px',
                    borderBottom: 'solid 1px gray',
                    padding: '6px',
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
                      borderBottom: 'solid 1px gray',
                      padding: '10px',
                      background: 'white',
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
