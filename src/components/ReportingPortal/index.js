import {Component} from 'react'
import {BsFilter} from 'react-icons/bs'

import TableView from '../TableView'
import LoaderThreeDots from '../LoaderThreeDots'

import {
  PortalContainer,
  ObservationHeading,
  FilterContainer,
  FilterText,
} from './styledComponents'

const tableStatus = {
  initial: 'INITIAL',
  inprogress: 'INPROGRESS',
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

  passUpdateUserToTable = (userName, userId, postId) => {
    const {passUpdateUserToPortal} = this.props
    passUpdateUserToPortal(userName, userId, postId)
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
        <ObservationHeading>Observations Assigned To Me</ObservationHeading>
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
