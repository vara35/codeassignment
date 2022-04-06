import styled from 'styled-components'

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  width: 100%;
  padding: 8px 15px;
  background-color: #ffffff;
  @media screen and (min-width: 767px) {
    height: 73px;
    border: solid 1px #d7dfe9;
    padding: 13px 78px 12px 49px;
  }
`
export const InputElement = styled.input`
  width: 70%;
  height: 30px;
  color: #ffffff;
  font-size: 14px;
  border-radius: 3px;
  border: solid 1px #d7dfe9;
  background-color: #ffffff;
  flex-grow: 1;
  @media screen and (min-width: 767px) {
    width: 648px;
    height: 40px;
    color: #ffffff;
    margin: 4px 224px 4px 0;
    padding: 8px 556px 8px 16px;
  }
`

export const WritePostButton = styled.button`
  width: 80px;
  height: 30px;
  font-family: 'HKGrotesk';
  font-size: 12px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: normal;
  border-radius: 4px;
  border: 0;
  color: #ffffff;
  background-color: #0b69ff;
  @media screen and (min-width: 767px) {
    width: 106px;
    height: 40px;
    line-height: 1.71;
    letter-spacing: normal;
  }
`
export const IconInputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  height: 30px;
  border-radius: 3px;
  border: solid 1px #d7dfe9;
  @media screen and (min-width: 767px) {
    width: 648px;
    height: 40px;
    margin: 4px 224px 4px 0;
    padding: 8px 556px 8px 16px;
    border-radius: 3px;
    border: 0;
  }
`

export const HeaderLogoContainer = styled.div`
  display: flex;
  align-items: center;
`
export const HeaderImage = styled.img`
  border-radius: 50%;
  height: 40px;
  width: 40px;
  margin-left: 8px;
`
