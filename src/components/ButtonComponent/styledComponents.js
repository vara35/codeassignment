import styled from 'styled-components'

export const ApproveButton = styled.button`
  width: 93px;
  height: 40px;
  margin: ${props =>
    props.marginValue ? '10px  0 0 15px' : '12.5px  0 0 58px'};
  padding: 8px 20px;
  border-radius: 4px;
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
  border: 0;
`
export const ApprovedText = styled.p`
  width: 93px;
  height: 40px;
  margin: ${props => (props.marginValue ? '10px  0 0 15px' : '14px  0 0 58px')};
  padding: 8px 20px;
  border-radius: 4px;
  font-family: 'roboto';
  font-size: 14px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: normal;
  color: ${props => (props.loading ? '#000000' : '#2dca73')};
`
