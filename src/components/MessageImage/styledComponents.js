import styled from 'styled-components'

export const MessageContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  position: ${props => (props.topNum ? '' : 'relative')};
`

export const MessageImg = styled.img`
  width: 28px;
  height: 27px;
  position: relative;
  @media screen and (max-width: 567px) {
    width: 16px;
    height: 16px;
  }
`
export const MessageCounter = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff0b37;
  color: #ffffff;
  font-size: 8px;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  position: absolute;
  bottom: 8px;
  left: 18px;
  right: 0;
  @media screen and (max-width: 567px) {
    width: 8px;
    height: 8px;
    font-size: 6px;
    bottom: 4px;
    left: 10px;
    right: 0;
  }
`
