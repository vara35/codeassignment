import {Component} from 'react'
import {BsFilter} from 'react-icons/bs'

import TableView from '../TableView'
import LoaderThreeDots from '../LoaderThreeDots'
import ReportingPortalHeader from '../ReportingPortalHeader'
import AcceptAndObserveHeading from '../AcceptAndObserveHeading'

import {PortalContainer, FilterContainer, FilterText} from './styledComponents'

const tableStatus = {
  initial: 'INITIAL',
  inprogress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class ReportingPortal extends Component {
  state = {tableCurrentStatus: tableStatus.initial}

  componentDidMount() {
    this.getUserDataInPortal()
  }

  getUserDataInPortal = async () => {
    this.setState({tableCurrentStatus: tableStatus.inprogress})

    this.setState({
      tableCurrentStatus: tableStatus.success,
    })
  }

  changeSwitchStatusFromPortal = () => {
    this.changePortalSwitchStatus()
  }

  tableFailureView = () => 'tableFailureView'

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

  tableSuccessView = () => (
    <TableView passUpdateUserToTable={this.passUpdateUserToTable} />
  )

  tableInitialView = () => <LoaderThreeDots />

  getTableData = () => {
    const {tableCurrentStatus} = this.state
    switch (tableCurrentStatus) {
      case tableStatus.inprogress:
        return this.tableInitialView()
      case tableStatus.success:
        return this.tableSuccessView()
      case tableStatus.failure:
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
