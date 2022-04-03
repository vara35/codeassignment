import {BiSearchAlt2} from 'react-icons/bi'

import {
  NavContainer,
  InputElement,
  WritePostButton,
  HeaderLogoContainer,
  HeaderImage,
  IconInputContainer,
} from './styledComponents'

const Header = () => (
  <NavContainer>
    <IconInputContainer>
      <BiSearchAlt2 />
      <InputElement type="search" placeholder="Search" />
    </IconInputContainer>
    <HeaderLogoContainer>
      <WritePostButton type="button">Write Post</WritePostButton>
      <HeaderImage src="https://res.cloudinary.com/image-link-getter/image/upload/v1647793795/Screenshot_2022-03-20_215818_ec0cww.png" />
    </HeaderLogoContainer>
  </NavContainer>
)

export default Header
