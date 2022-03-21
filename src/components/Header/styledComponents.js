import styled from 'styled-components'

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-top:20px
  padding-left: 20px;
  padding-right: 20px;
`
export const InputElement = styled.input`
  height: 24px;
  border: 0;
  outline: none;
  width: 100%;
  padding: 8px;
  flex-grow: 1;
`

export const WriteButton = styled.button`
  min-width: 60px;
  height: 24px;
  border-radius: 4px;
  font-size: 10px;
  border-radius: 6px;
  color: #ffffff;
  font-family: 'Roboto';
  border: 0;
  background-color: #0b69ff;
  margin-left: 10px;
`
export const IconInputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid;
  border-radius: 4px;
  width: 70%;
  margin-left: 20px;
  padding-left: 10px;
`

export const ButtonImageContainer = styled.div`
  display: flex;
  align-items: center;
`
export const HeaderImage = styled.img`
  border-radius: 10px;
  height: 40px;
  width: 50px;
  margin-left: 8px;
`
