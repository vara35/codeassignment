import styled from 'styled-components'

export const CardListElement = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  list-style-type: none;
  background-color: #ffffff;
  border-radius: 10px;
  border: 1px solid #dedede;
  padding: 14px;
  margin-top: 10px;
  margin-right: 10px;
  min-height: 200px;
  @media screen and (min-width: 767px) {
    width: 31%;
    max-width: 250px;
  }
`
export const CardHeading = styled.h2`
  width: 153px;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: normal;
  color: var(--dark-blue-grey);
`
export const CardDescription = styled.p`
  width:240px
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: normal;
  color: var(--dark-blue-grey);
`

export const MessagesCountContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const SpanAndMessageContainer = styled.div`
  display: flex;
  align-items: center;
`

export const SpanContainer = styled.span`
  display: flex;
  justify-content: center;
  height: 16px;
  margin-right: 10px;
  font-family: 'Rubik';
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  padding-left: 6px;
  padding-right: 6px;
  color: ${props => (props.addColor ? '#2dca73' : '#0b69ff')};
  background-color: ${props =>
    props.addColor ? '#f3fff8' : 'rgba(11, 105, 255, 0.1)'};
`
export const MessageImage = styled.img`
  width: 30px;
`
export const CardImage = styled.img`
  width: 35px;
  height: 32px;
  border-radius: 20px;
  border: 0;
`
export const UserName = styled.h3`
  color: #7e858e;
  font-family: 'HKGrotesk';
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  margin-left: 8px;
  line-height: 1.71;
  letter-spacing: normal;
`
export const ApproveButton = styled.button`
  width: 60px;
  height: 24px;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: normal;
  color: white;
  background-color: ${props => (props.addBgColor ? '#2dca73' : '#0b69ff')};
  border: 0;
  border-radius: 6px;
  cursor: pointer;
`
