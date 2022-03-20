import {Component} from 'react'

import FollowingDomain from '../FollowingDomains'

import {
  PlatformReviewMainContainer,
  LeftMenuContainer,
  CardContainer,
  LeftContainerLogo,
  AllDomainDescription,
  CapIcon,
  FollowingDomainContainer,
  MenuUlElement,
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
  {
    Name: 'See all',
    id: 4,
  },
]

class PlatformReviewPage extends Component {
  //   componentDidMount() {
  //       this.getUSerData()
  //   }

  getUSerData = async () => {
    const Url =
      'https://y5764x56r9.execute-api.ap-south-1.amazonaws.com/mockAPI/posts'
    const options = {
      method: 'GET',
    }
    const response = await fetch(Url, options)
  }

  render() {
    return (
      <PlatformReviewMainContainer>
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
          <FollowingDomainContainer>
            <AllDomainDescription>SUGGEST DOMAIN</AllDomainDescription>
            <CapIcon src="https://res.cloudinary.com/image-link-getter/image/upload/v1647763451/Screenshot_2022-03-20_133349_xlarfw.png" />
          </FollowingDomainContainer>
        </LeftMenuContainer>
        <CardContainer>World</CardContainer>
      </PlatformReviewMainContainer>
    )
  }
}

export default PlatformReviewPage
