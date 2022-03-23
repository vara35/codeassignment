import {SwitchComponentButton, SwitchContainer} from './styledComponents'

const SwitchButton = props => {
  const {changeSwitchStatus} = props
  const renderChangeSwitchStatusFunction = () => {
    changeSwitchStatus()
  }

  return (
    <SwitchContainer>
      <SwitchComponentButton onClick={renderChangeSwitchStatusFunction}>
        Switch
      </SwitchComponentButton>
    </SwitchContainer>
  )
}
export default SwitchButton
