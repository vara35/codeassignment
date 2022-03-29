import styled from 'styled-components'

export const ApproveButton = styled.button`
  width: 93px;
  height: 40px;
  margin: ${props => (props.marginValue ? '10px  0 0 15px' : '0 0 0 58px')};
  padding: 8px 20px;
  border-radius: 4px;
  border: 0;
  background-color: ${props => (props.retry ? 'red' : '#0b69ff')};
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: normal;
  color: #ffffff;
  cursor: pointer;
  @media screen and (max-width: 567px) {
    width: 50px;
    height: 25px;
    font-size: 10px;
    padding: 4px;
  }
`
export const ApprovedText = styled.p`
  width: 93px;
  height: 40px;
  margin: ${props => (props.marginValue ? '10px  0 0 15px' : '0  0 0 58px')};
  padding: ${props => (props.marginValue ? '8px 20px' : '8px 0px 0 30px')};
  border-radius: 4px;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: normal;
  color: #2dca73;
`
