import {useTable, useSortBy} from 'react-table'
import React from 'react'
import {BsFilter} from 'react-icons/bs'

import Profile from '../Profile'
import MessageImage from '../MessageImage'
import SwitchButton from '../SwitchButton'
import Category from '../Category'
import ButtonComponent from '../ButtonComponent'

import {
  PortalContainer,
  ObservationHeading,
  FilterContainer,
  FilterText,
} from './styledComponents'

const ReportingPortal = props => {
  const {cardData, changePortalSwitchStatus, passUpdateUserToPortal} = props

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
          const updateUser1 = () => {
            passUpdateUserToPortal(userName, userId, postId)
          }
          return (
            <ButtonComponent
              isApproved={isApproved}
              marginStatus="true"
              updateUser={updateUser1}
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
    [passUpdateUserToPortal],
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({columns, data}, useSortBy)

  const changeSwitchStatusFromPortal = () => {
    changePortalSwitchStatus()
  }

  const getIcons = column => {
    if (column.isSorted === false) {
      if (column.isSortedDesc) {
        return '🔼'
      }
      return '🔽'
    }
    return null
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
          height: '64px',
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
                width: '1024px',
                height: '64px',
                margin: '24px 100px 0',
                padding: '24px 34px 23px 68px',
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
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  style={{
                    padding: '10px',
                    borderBottom: 'solid 2px #d7dfe9',
                  }}
                >
                  {column.render('Header')}
                  <span>{getIcons(column)}</span>
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
