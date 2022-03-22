import FollowingDomain from '../FollowingDomains'
import SuggestDomains from '../SuggestDomains'

import {
  LeftMenuContainer,
  LeftContainerLogo,
  AllDomainDescription,
  CapIcon,
  FollowingDomainContainer,
  MenuUlElement,
  SpanElement,
  YourPostContainer,
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

const LeftMenu = () => (
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

export default LeftMenu
