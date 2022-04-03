import styled from 'styled-components'

export const CategoryContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media screen and (max-width: 567px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const CategoryName = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 75px;
  max-width: 100px;
  height: 24px;
  border-radius: 2px;
  margin-right: 10px;
  margin-top: 5px;
  font-family: 'Rubik';
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: ${props => (props.addColor ? '#2dca73' : '#0b69ff')};
  background-color: ${props =>
    props.addColor ? '#f3fff8' : 'rgba(11, 105, 255, 0.1)'};
  @media screen and (max-width: 567px) {
    min-width: 50px;
    max-width: 75px;
    height: 16px;
    font-size: 8px;
  }
`
