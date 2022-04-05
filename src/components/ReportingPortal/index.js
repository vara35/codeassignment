import {Component} from 'react'
import {BsFilter} from 'react-icons/bs'

import TableView from '../TableView'
import LoaderThreeDots from '../LoaderThreeDots'
import ReportingPortalHeader from '../ReportingPortalHeader'
import AcceptAndObserveHeading from '../AcceptAndObserveHeading'
import ApiFailureView from '../FailureView'

import {PortalContainer, FilterContainer, FilterText} from './styledComponents'

const INITIAL = 'INITIAL'
const IN_PROGRESS = 'IN_PROGRESS'
const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'

const tableStatus = {
  INITIAL,
  IN_PROGRESS,
  SUCCESS,
  FAILURE,
}

class ReportingPortal extends Component {
  state = {tableCurrentStatus: tableStatus.INITIAL}

  componentDidMount() {
    this.getUserDataInPortal()
  }

  getUserDataInPortal = async () => {
    this.setState({tableCurrentStatus: tableStatus.IN_PROGRESS})

    this.setState({
      tableCurrentStatus: tableStatus.SUCCESS,
    })
  }

  changeSwitchStatusFromPortal = () => {
    this.changePortalSwitchStatus()
  }

  passUpdateUserToTable = async (userName, userId, postId) => {
    let parsedData = []
    const getDataFromLocalStorage = localStorage.getItem('tableData')
    if (getDataFromLocalStorage !== null) {
      parsedData = JSON.parse(getDataFromLocalStorage)
    }
    const modifyDataToInprogress = parsedData.map(eachItem => {
      if (eachItem.postId === postId) {
        return {...eachItem, isApproved: 'IN_PROGRESS'}
      }
      return eachItem
    })
    localStorage.setItem('tableData', JSON.stringify(modifyDataToInprogress))
    const Url =
      'https://y5764x56r9.execute-api.ap-south-1.amazonaws.com/mockAPI/posts'
    const userDetails = {username: userName, userId}
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userDetails),
    }
    const userStatus = await fetch(Url, options)
    if (userStatus.ok) {
      const modifyData = parsedData.map(eachItem => {
        if (eachItem.postId === postId) {
          return {...eachItem, isApproved: 'SUCCESS'}
        }
        return eachItem
      })
      localStorage.setItem('tableData', JSON.stringify(modifyData))
    } else {
      const modifyDataToFailure = parsedData.map(eachItem => {
        if (eachItem.postId === postId) {
          return {...eachItem, isApproved: 'FAILURE'}
        }
        return eachItem
      })
      localStorage.setItem('tableData', JSON.stringify(modifyDataToFailure))
    }
  }

  retryApi = () => {
    this.getUserDataInPortal()
  }

  tableFailureView = () => <ApiFailureView retryApi={this.retryApi} />

  tableSuccessView = () => (
    <TableView passUpdateUserToTable={this.passUpdateUserToTable} />
  )

  tableInitialView = () => <LoaderThreeDots />

  getTableData = () => {
    const {tableCurrentStatus} = this.state
    switch (tableCurrentStatus) {
      case tableStatus.IN_PROGRESS:
        return this.tableInitialView()
      case tableStatus.SUCCESS:
        return this.tableSuccessView()
      case tableStatus.FAILURE:
        return this.tableFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <PortalContainer>
        <ReportingPortalHeader />
        <AcceptAndObserveHeading text="Observations Assigned To Me" />
        <FilterContainer>
          <BsFilter />
          <FilterText>FILTER</FilterText>
        </FilterContainer>
        {this.getTableData()}
      </PortalContainer>
    )
  }
}

export default ReportingPortal
