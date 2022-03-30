import styled from 'styled-components'

export const AcceptHeading = styled.h1`
  width: ${props => (props.text === 'Accept Requests' ? '200px' : '425px')};
  height: 40px;
  font-family: 'HKGrotesk';
  font-size: 25px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  padding-left: 20px;
  letter-spacing: normal;
  color: ${props => (props.text === 'Accept Requests' ? '#171f46' : '#0b69ff')};
  @media screen and (min-width: 767px) {
    width: ${props => (props.text === 'Accept Requests' ? '240px' : '425px')};
    margin: ${props =>
      props.text === 'Accept Requests'
        ? ' 24px 128px 16px 48px'
        : '48px 87px 14px 100px'};
    font-size: 32px;
    padding-left: 0px;
  }
`
