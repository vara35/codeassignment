import styled from 'styled-components'

export const PlatformReviewMainContainer = styled.div`
  min-height: 1024px;
  background-color: #fbfbfb;

  @media screen and (min-width: 767px) {
    display: flex;
  }
`

export const LeftMenuContainer = styled.div`
  width: 240px;
  height: 1024px;
  margin: 0 48px 0 0;
  padding: 12px 1px 235px;
  border: solid 1px #d7dfe9;
  background-color: var(--white);

  @media screen and (min-width: 767px) {
    width: 25%;
    max-width: 250px;
    border-right: 1px solid #dedede;
  }
`

export const CardContainer = styled.div`
  width: 100%;
  background-color: #fbfbfb;
`
export const LeftContainerLogo = styled.img`
  width: 48px;
  height: 48px;
  margin: 0 95px 29px 23px;
  object-fit: contain;
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

export const CardUlElement = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
`
