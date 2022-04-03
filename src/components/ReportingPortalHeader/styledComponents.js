import styled from 'styled-components'

export const PortalHeaderContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 80px;
  margin: 0 0 48px;
  padding: 1px 32px;
  border: solid 1px #d7dfe9;
  background-color: #ffffff;
  @media screen and (max-width: 767px) {
    height: 41px;
    padding: 2px 15px 2px 15px;
  }
`
export const LogoHeadingContainer = styled.div`
  display: flex;
  align-items: center;
`

export const PortalLogo = styled.img`
  width: 78px;
  height: 77px;
  margin: 0 44px 0 0;
  @media screen and (max-width: 767px) {
    height: 40px;
    width: 40px;
    margin: 0 10px 0 0;
  }
`

export const PortalHeading = styled.h2`
  width: 177px;
  height: 32px;
  margin: 23px 525px 23px 44px;
  font-family: 'HKGrotesk';
  font-size: 24px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: #171f46;
  @media screen and (max-width: 767px) {
    height: 20px;
    width: 100px;
    font-size: 14px;
    margin: 10px 10px 10px 5px;
  }
`
