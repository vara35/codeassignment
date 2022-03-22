import styled from 'styled-components'

export const LeftMenuContainer = styled.div`
  width: 100%;
  padding: 20px;

  @media screen and (min-width: 767px) {
    width: 25%;
    max-width: 250px;
    border-right: 1px solid #dedede;
  }
`
export const LeftContainerLogo = styled.img`
  height: 60px;
`
export const AllDomainDescription = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.3;
  letter-spacing: 0.12px;
  color: 'grey';
  margin-top: 20px;
`

export const FollowingDomainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const CapIcon = styled.img`
  width: 16px;
  height: 16px;
`

export const MenuUlElement = styled.ul`
  width: 100%;
  padding-left: 0;
`
export const YourPostContainer = styled.div`
  display: flex;
  align-items: center;
`
export const SpanElement = styled.span`
  display: flex;
  justify-content: center;
  color: #0b69ff;
  background-color: grey;
  border-radius: 20px;
  width: 20px;
`
