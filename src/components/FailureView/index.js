import {
  FailureContainer,
  FailureImage,
  SomethingWrongHeading,
  RetryButton,
} from './styledComponents'

const ApiFailureView = props => {
  const {retryApi} = props
  const reCallApi = () => {
    retryApi()
  }
  return (
    <FailureContainer>
      <FailureImage src="https://miro.medium.com/max/1400/0*zJ3sA4LbvcKen1N7.jpg" />
      <SomethingWrongHeading>Something Went Wrong</SomethingWrongHeading>
      <RetryButton type="button" onClick={reCallApi}>
        Retry
      </RetryButton>
    </FailureContainer>
  )
}
export default ApiFailureView
