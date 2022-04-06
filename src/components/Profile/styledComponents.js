import styled from 'styled-components'

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
`

export const ProfileImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 0;
  @media screen and (max-width: 767px) {
    width: 16px;
    height: 16px;
  }
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
  @media screen and (max-width: 767px) {
    font-size: 8px;
  }
`
export const ProfileImageName = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 32px;
  border-radius: 50%;
  background-color: #ca9f00;
  color: #ffff;
  font-size: 12px;
  @media screen and (max-width: 767px) {
    width: 16px;
    height: 16px;
    font-size: 8px;
  }
`
