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
  color: var(--dark-blue-grey);
  margin-top:0;
}
`
export const SuggestListButton = styled.button`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.1;
  letter-spacing: normal;
  color: var(--dark-blue-grey);
  margin-bottom: 24px;
  border: 0;
  color: ${props => (props.category === 'Cancel' ? 'red' : 'blue')};
`
