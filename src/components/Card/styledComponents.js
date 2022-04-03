import styled from 'styled-components'

export const CardListElement = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: ${props =>
    props.commentsCount ? 'space-around' : 'space-between'};
  width: 336px;
  height: 371px;
  margin: 16px 32px 32px 48px;
  padding: 16px 16px 24px;
  border-radius: 4px;
  border: solid 1px #d7dfe9;
  background-color: #ffffff;
  @media screen and (min-width: 767px) {
    width: 336px;
    height: 371px;
    margin: 16px 32px 32px;
    padding: 16px 16px 24px;
  }
`
export const SpanAndMessageContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const EllipseContainer = styled.div`
  text-align: right;
`

export const Ellipse = styled.img`
  width: 16px;
  height: 16px;
`

export const CardHeading = styled.h2`
  width: 153px;
  height: 160px;
  font-family: 'roboto';
  margin: 0px 58px 0 0;
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: normal;
  color: #171f46;
`
export const CardDescription = styled.p`
  width: 200px;
  height: 48px;
  font-family: 'roboto';
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: normal;
  color: #171f46;
  margin-top: 0;
`

export const MessagesCountContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ProfileButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`

export const MessageIcon = styled.img`
  width: 25px;
  height: 24px;
  margin: 6px 0px 4px 0;
  object-fit: contain;
`
export const Comments = styled.span`
  color: #171f46;
  width: 10px;
  height: 24px;
  margin: 0 0 0 0px;
  font-family: 'HKGrotesk';
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
`
