import styled from 'styled-components'

export const DomainNameList = styled.li`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
`
export const ListDescription = styled.p`
  font-family: "Roboto";
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.1;
  letter-spacing: normal;
  color: #171f46 ;
  margin-top:0;
}
`
export const SuggestListButton = styled.button`
  font-family: 'HKGrotesk';
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: normal;
  border: 0;
  background-color: transparent;
  padding-bottom: 8px;
  color: ${props => (props.category === 'Cancel' ? 'red' : 'blue')};
`
