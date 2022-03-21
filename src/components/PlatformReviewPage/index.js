import {Component} from 'react'
import Loader from 'react-loader-spinner'

import Card from '../Card'
import FollowingDomain from '../FollowingDomains'
import SuggestDomains from '../SuggestDomains'
import Header from '../Header'
import ReportingPortal from '../ReportingPortal'

import {
  PlatformReviewMainContainer,
  LeftMenuContainer,
  CardContainer,
  LeftContainerLogo,
  AllDomainDescription,
  CapIcon,
  FollowingDomainContainer,
  MenuUlElement,
  SpanElement,
  YourPostContainer,
  HorizontalLIne,
  AcceptHeading,
  LoadingContainer,
  FailureContainer,
  FailureImage,
  SomethingWrongHeading,
  RetryButton,
  CardUlElement,
  SwitchComponentButton,
  SwitchContainer,
} from './styledComponents'

const DomainNames = [
  {
    Name: 'Video Editing',
    id: 1,
  },
  {
    Name: '3D Animation',
    id: 2,
  },
  {
    Name: 'UI/UX designers',
    id: 3,
  },
]

const suggestDomainNames = [
  {
    Name: 'Javascript',
    category: 'Follow',
    id: 1,
  },
  {
    Name: 'Jabong',
    category: 'Follow',
    id: 2,
  },
  {
    Name: 'React',
    category: 'Cancel',
    id: 3,
  },
]

const componentApiStatus = {
  initial: 'INITIAL',
  inprogress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class PlatformReviewPage extends Component {
  state = {cardApiStatus: componentApiStatus.success, switchStatus: true}

  //   componentDidMount() {
  //     this.getUserData()
  //   }

  getUserData = async () => {
    this.setState({cardApiStatus: componentApiStatus.inprogress})

    const Url =
      'https://y5764x56r9.execute-api.ap-south-1.amazonaws.com/mockAPI/posts'
    const options = {
      method: 'GET',
    }
    const response = await fetch(Url, options)
    const data = await response.json()
    console.log(response)
  }

  changeSwitchStatus = () => {
    this.setState(prevState => ({switchStatus: !prevState.switchStatus}))
  }

  cardFailureView = () => (
    <FailureContainer>
      <FailureImage src="https://miro.medium.com/max/1400/0*zJ3sA4LbvcKen1N7.jpg" />
      <SomethingWrongHeading>Something went wrong</SomethingWrongHeading>
      <RetryButton type="button">Retry</RetryButton>
    </FailureContainer>
  )

  cardSuccessView = () => (
    <CardUlElement>
      <Card />
    </CardUlElement>
  )

  cardInprogressView = () => <LoadingContainer>Inprogress</LoadingContainer>

  showCardsFunction = () => {
    const {cardApiStatus} = this.state
    switch (cardApiStatus) {
      case componentApiStatus.inprogress:
        return this.cardInprogressView()
      case componentApiStatus.success:
        return this.cardSuccessView()
      case componentApiStatus.failure:
        return this.cardFailureView()
      default:
        return null
    }
  }

  showLeftMenuContainer = () => (
    <LeftMenuContainer>
      <LeftContainerLogo src="https://res.cloudinary.com/image-link-getter/image/upload/v1647758281/IB-Hubs_nbeuia.png" />
      <AllDomainDescription>ALL DOMAINS</AllDomainDescription>
      <FollowingDomainContainer>
        <AllDomainDescription>FOLLOWING DOMAIN</AllDomainDescription>
        <CapIcon src="https://res.cloudinary.com/image-link-getter/image/upload/v1647763451/Screenshot_2022-03-20_133349_xlarfw.png" />
      </FollowingDomainContainer>
      <MenuUlElement>
        {DomainNames.map(eachDomain => (
          <FollowingDomain key={eachDomain.id} name={eachDomain.Name} />
        ))}
      </MenuUlElement>
      <AllDomainDescription>See all</AllDomainDescription>

      <FollowingDomainContainer>
        <AllDomainDescription>SUGGEST DOMAIN</AllDomainDescription>
        <CapIcon src="https://res.cloudinary.com/image-link-getter/image/upload/v1647763451/Screenshot_2022-03-20_133349_xlarfw.png" />
      </FollowingDomainContainer>
      <MenuUlElement>
        {suggestDomainNames.map(eachSuggest => (
          <SuggestDomains key={eachSuggest.id} suggestItem={eachSuggest} />
        ))}
      </MenuUlElement>
      <AllDomainDescription>See all</AllDomainDescription>
      <FollowingDomainContainer>
        <AllDomainDescription>MY POSTS</AllDomainDescription>
        <YourPostContainer>
          <SpanElement>6</SpanElement>
          <CapIcon src="https://res.cloudinary.com/image-link-getter/image/upload/v1647763451/Screenshot_2022-03-20_133349_xlarfw.png" />
        </YourPostContainer>
      </FollowingDomainContainer>
    </LeftMenuContainer>
  )

  render() {
    const {switchStatus} = this.state
    return (
      <PlatformReviewMainContainer>
        {this.showLeftMenuContainer()}

        <CardContainer>
          <Header />
          <HorizontalLIne />
          <SwitchContainer>
            <SwitchComponentButton onClick={this.changeSwitchStatus}>
              Switch
            </SwitchComponentButton>
          </SwitchContainer>
          {switchStatus ? <AcceptHeading>Accept Request</AcceptHeading> : null}
          {switchStatus ? this.showCardsFunction() : <ReportingPortal />}
        </CardContainer>
      </PlatformReviewMainContainer>
    )
  }
}

export default PlatformReviewPage
