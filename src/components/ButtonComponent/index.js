import {ApproveButton, ApprovedText} from './styledComponents'

const approveButtonConstants = {
  initial: 'INITIAL',
  inprogress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

const ButtonComponent = props => {
  const {isApproved, updateUser, marginStatus} = props

  const buttonFailureView = () => (
    <ApproveButton retry marginValue={marginStatus}>
      Retry
    </ApproveButton>
  )

  const buttonSuccessView = () => (
    <ApprovedText marginValue={marginStatus}>Approved</ApprovedText>
  )

  const buttonInprogressView = () => (
    <ApprovedText loading="true" marginValue={marginStatus}>
      Loading...
    </ApprovedText>
  )

  const updateApproveFunction = () => {
    updateUser()
  }

  const buttonInitialView = () => (
    <ApproveButton onClick={updateApproveFunction} marginValue={marginStatus}>
      Approve
    </ApproveButton>
  )

  const showButton = () => {
    switch (isApproved) {
      case approveButtonConstants.initial:
        return buttonInitialView()
      case approveButtonConstants.inprogress:
        return buttonInprogressView()
      case approveButtonConstants.success:
        return buttonSuccessView()
      case approveButtonConstants.failure:
        return buttonFailureView()
      default:
        return null
    }
  }

  return <>{showButton()}</>
}

export default ButtonComponent
