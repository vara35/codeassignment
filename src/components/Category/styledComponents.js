import styled from 'styled-components'

export const SpanAndMessageContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const SpanContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 75px;
  max-width: 100px;
  height: 24px;
  border-radius: 2px;
  margin-right: 10px;
  font-family: 'ROBOTO';
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: ${props => (props.addColor ? '#2dca73' : '#0b69ff')};
  background-color: ${props =>
    props.addColor ? '#f3fff8' : 'rgba(11, 105, 255, 0.1)'};
`
