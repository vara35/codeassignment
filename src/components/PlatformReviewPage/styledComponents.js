import styled from 'styled-components'

export const PlatformReviewMainContainer = styled.div`
  background-color: #fbfbfb;
  min-height: 100vh;
  @media screen and (min-width: 767px) {
    display: flex;
  }
`

export const LeftMenuContainer = styled.div`
  width: 100%;
  padding: 20px;

  @media screen and (min-width: 767px) {
    width: 25%;
    max-width: 250px;
    border-right: 1px solid grey;
  }
`

export const CardContainer = styled.div`
  width: 100%;
  background-color: #fbfbfb;
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
export const SpanElement = styled.span`
  display: flex;
  justify-content: center;
  color: #0b69ff;
  background-color: grey;
  border-radius: 20px;
  width: 20px;
`
export const YourPostContainer = styled.div`
  display: flex;
  align-items: center;
`

export const HorizontalLIne = styled.hr`
  width: 100%;
  color: grey;
`
export const AcceptHeading = styled.h1`
  width: 240px;
  height: 40px;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.6;
  letter-spacing: normal;
  color: var(--dark-blue-grey);
  margin-left: 20px;
  @media screen and (min-width: 767px) {
    font-size: 32px;
  }
`
export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
  height: 30vh;
`

export const FailureContainer = styled.div`
  width: 100%;
  text-align: center;
`

export const FailureImage = styled.img`
  width: 60%;
  border-radius: 8px;
  max-width: 600px;
`
export const SomethingWrongHeading = styled.h2`
  font-size: 15px;
  font-family: 'Roboto';
  text-align: center;
  font-weight: 300px;
`
export const RetryButton = styled.button`
  background-color: #0b69ff;
  color: #ffffff;
  padding: 4px;
  width: 80px;
  border: 0;
  border-radius: 8px;
`

export const CardUlElement = styled.ul`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
`
