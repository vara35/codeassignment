import styled from 'styled-components'

export const CardListElement = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  list-style-type: none;
  width: 100%;
  height: 371px;
  margin: 16px 32px 32px;
  padding: 16px 16px 24px;
  border-radius: 4px;
  border: solid 1px #d7dfe9;
  background-color: #ffffff;

  @media screen and (min-width: 767px) {
    width: 300px;
    height: 371px;
    margin: 16px 32px 32px;
    padding: 16px 16px 24px;
  }
`
export const SpanAndMessageContainer = styled.div`
  display: flex;
  align-items: center;
`

export const EllipseContainer = styled.div`
  text-align: right;
  height: 5px;
`

export const CardHeading = styled.h2`
  width: 183px;
  height: 160px;
  font-family: 'HKGrotesk';
  font-size: 18px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  margin: 0 28px 24px 0;
  line-height: 1.3;
  letter-spacing: normal;
  color: #171f46;
`
export const CardDescription = styled.p`
  width:240px
    height: 48px;
  font-family: "HKGrotesk";
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: normal;
  color: #171f46;
  margin-top:20px;
`

export const MessagesCountContainer = styled.div`
  display: flex;
  justify-content: space-between;
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

export const ApproveButton = styled.button`
  width: 93px;
  height: 40px;
  margin: 24px 0 0 58px;
  padding: 8px 20px;
  border-radius: 4px;
  background-color: #0b69ff;
  font-family: 'HKGrotesk';
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
  margin: 24px 0 0 58px;
  padding: 8px 20px;
  border-radius: 4px;
  font-family: 'HKGrotesk';
  font-size: 14px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: normal;
  color: #2dca73;
`
